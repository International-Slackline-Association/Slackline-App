import React, { useState, useEffect, useContext } from 'react';
import AppBackgroundContainer from 'components/AppBackgroundContainer';
import styled, { ThemeContext } from 'styles/styled-components';
import media from 'styles/media';
import { useVisitAnalytics } from 'utils/hooks/analytics';
import { DistanceMeasurerHelmet } from 'components/DocumentHeaders/DistanceMeasurerHelmet';
import 'mapbox-gl/dist/mapbox-gl.css';
import turfLineString from 'turf-linestring';
import turfLength from '@turf/length';

import SVGLogo from './gps.svg?file';
import CrosshairLogo from './measure_crosshair.svg';

import CancelIcon from 'components/svg/cancel.svg';

import ReactMapGL, {
  ViewportProps,
  GeolocateControl,
  Marker,
  Source,
  Layer,
} from 'react-map-gl';
import { getStorageItem, setStorageItem } from 'utils/storage';
import { touchableOpacity, elevatedShadow } from 'styles/mixins';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';
import { Utils } from 'utils/index';

const viewportStorageKey = 'distance-measurer-viewport';

enum SelectedTab {
  From = 1,
  To = 2,
}
interface SelectedPoint {
  latitude: number;
  longitude: number;
}

export default function DistanceMeasurer() {
  useVisitAnalytics('distance_measurer_visit');
  const savedViewport = JSON.parse(getStorageItem(viewportStorageKey) || '{}');

  const [viewport, setViewport] = useState({
    width: '100%' as string | number,
    height: '100%' as string | number,
    latitude: (savedViewport?.latitude as number) || 44.449,
    longitude: savedViewport?.longitude || 15.126,
    zoom: savedViewport?.zoom || 2.25,
  });

  const [selectedTab, setSelectedTab] = useState(SelectedTab.From);
  const [selectedPointFrom, setSelectedPointFrom] = useState<SelectedPoint>();

  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);

  function onCancelClick() {
    dispatch(goBack());
  }

  function onTabButtonClick(tab: SelectedTab) {
    return e => {
      setSelectedTab(tab);
      if (tab === SelectedTab.To) {
        setSelectedPointFrom({
          latitude: viewport.latitude,
          longitude: viewport.longitude,
        });
      }
      if (tab === SelectedTab.From) {
        setSelectedPointFrom(undefined);
      }
    };
  }

  function onViewporChange(viewport: ViewportProps) {
    setViewport(viewport);
    setStorageItem(
      viewportStorageKey,
      JSON.stringify({
        latitude: viewport.latitude,
        longitude: viewport.longitude,
        zoom: viewport.zoom,
      }),
    );
  }

  function measureDistance() {
    if (selectedPointFrom) {
      const line = turfLineString([
        [selectedPointFrom?.longitude, selectedPointFrom?.latitude],
        [viewport.longitude, viewport.latitude],
      ]);
      const length = turfLength(line, { units: 'meters' });
      return length;
    }
    return undefined;
  }

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [selectedPointFrom?.longitude, selectedPointFrom?.latitude],
            [viewport.longitude, viewport.latitude],
          ],
        },
      },
    ],
  };

  const CrosshairMarker = React.memo(
    (data: { point: SelectedPoint; length?: number }) => {
      return (
        <Marker
          latitude={data.point.latitude}
          longitude={data.point.longitude}
          offsetLeft={-10}
          offsetTop={-20}
        >
          <CrosshairWrapper>
            {(data.length ?? 0) > 0 && (
              <span>{Utils.trimToDecimals(data.length!, 0)} m</span>
            )}
            <Crosshair />
          </CrosshairWrapper>
        </Marker>
      );
    },
  );

  return (
    <React.Fragment>
      <DistanceMeasurerHelmet />
      <Wrapper>
        <CloseButton onClick={onCancelClick} />

        <ReactMapGL
          mapStyle={`https://api.maptiler.com/maps/hybrid/style.json?key=${process.env.MAPTILER_KEY}`}
          {...viewport}
          onViewportChange={onViewporChange}
        >
          <CrosshairMarker
            point={{
              latitude: selectedPointFrom?.latitude || viewport.latitude,
              longitude: selectedPointFrom?.longitude || viewport.longitude,
            }}
          />
          <ButtonWrapper>
            <TabButton
              onClick={onTabButtonClick(SelectedTab.From)}
              isSelected={selectedTab === SelectedTab.From}
            >
              From
            </TabButton>
            <TabButton
              onClick={onTabButtonClick(SelectedTab.To)}
              isSelected={selectedTab === SelectedTab.To}
            >
              To
            </TabButton>
          </ButtonWrapper>

          <GPSControl
            positionOptions={{ enableHighAccuracy: false }}
            trackUserLocation={true}
          />

          {selectedTab === SelectedTab.To && (
            <React.Fragment>
              <CrosshairMarker
                point={{
                  latitude: viewport.latitude,
                  longitude: viewport.longitude,
                }}
                length={measureDistance()}
              />
              <Source type="geojson" data={geojson}>
                <Layer
                  id="LineString"
                  type="line"
                  layout={{
                    'line-join': 'round',
                    'line-cap': 'round',
                  }}
                  paint={{
                    'line-color': theme.text,
                    'line-width': 2,
                    'line-dasharray': [2, 2],
                  }}
                />
              </Source>
            </React.Fragment>
          )}
        </ReactMapGL>
      </Wrapper>
    </React.Fragment>
  );
}

const Crosshair = styled.img.attrs({ src: CrosshairLogo })`
  width: 20px;
  height: 20px;
`;

const CrosshairWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: visible;

  & span {
    font-weight: bold;
    position: absolute;
    /* top: -10px; */
    bottom: 25px;
    word-break: keep-all;
    white-space: nowrap;
    margin: auto;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const TabButton = styled.button<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  border: none;
  outline: none;
  text-align: center;
  padding: 1rem 2.5rem;
  font-size: 0.8rem;
  ${elevatedShadow};
  background-color: ${props =>
    props.isSelected ? props.theme.brand : props.theme.background};
  color: ${props => props.theme.text};
`;

const GPSControl = styled(GeolocateControl)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  & button {
    ${touchableOpacity};
    background-image: url(${SVGLogo});
  }
`;

const CloseButton = styled.img.attrs({ src: CancelIcon })`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 1.2rem;
  z-index: 9999;
  ${touchableOpacity}
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100vw;
  height: 100vh;
  ${media.desktop`
  `};
`;
