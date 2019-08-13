import React, { useState, useEffect, createRef, useRef } from 'react';
import AppBackgroundContainer from 'components/AppBackgroundContainer';
import styled, { css } from 'styles/styled-components';
import media, { isMobile } from 'styles/media';
import { RouteComponentProps } from 'react-router';
import { IChartWebbing, IChartBrand, IChartData, ChartType } from './interface';

import {
  XAxis,
  YAxis,
  LineMarkSeries,
  FlexibleXYPlot,
  HorizontalGridLines,
  VerticalGridLines,
} from 'react-vis';
import RVStyles from 'react-vis-styles';
import { Header, HeaderIcon } from './Header';
import {
  ChartTypeItemTextWrapper,
  ChartTypeText,
  ChartTypeItemText,
  Divider,
} from './ChartType';
import { Helmet } from 'react-helmet';
import {
  generateChartData,
  generateDefaultChartData,
  selectDeselectWebbing,
  selectDeselectBrand,
  deselectAll,
} from './chartData';
import { Legend } from './Legend';
import { generateChart } from './chartGenerator';

const chartTypes: ChartType[] = ['Stretch', 'Weight', 'Price', 'MBS'];
const defaultChartData = generateDefaultChartData();

interface Props extends RouteComponentProps {}
export default function WebbingComparison(props: Props) {
  const [data, setData] = useState<IChartData>(defaultChartData);
  const [legendStatus, setLegendStatus] = useState({
    selected: false,
    hovered: false,
  });
  const [isChartAnimated, setIsCharAnimated] = useState(true);
  const [selectedChartType, setSelectedChartType] = useState<ChartType>(
    'Stretch',
  );
  const [crosshairValues, setCrosshairValues] = useState();

  useEffect(() => {
    generateChartData().then(data => {
      setIsCharAnimated(true);
      setData(data);
    });
  }, []);

  function selectChartType(type: ChartType) {
    return evt => {
      setIsCharAnimated(true);
      setSelectedChartType(type);
    };
  }

  function webbingClicked(selectedWebbing: IChartWebbing) {
    setIsCharAnimated(false);
    const disableDeselect = !legendStatus.selected;
    setLegendStatus({ selected: true, hovered: legendStatus.hovered });
    setData(
      selectDeselectWebbing(data, selectedWebbing, false, disableDeselect),
    );
  }
  function webbingHovered(selectedWebbing: IChartWebbing) {
    setIsCharAnimated(false);
    setLegendStatus({ selected: legendStatus.selected, hovered: true });
    if (!legendStatus.selected) {
      setData(selectDeselectWebbing(data, selectedWebbing, true, true));
    }
  }

  function brandClicked(selectedBrand: IChartBrand) {
    setIsCharAnimated(false);
    setLegendStatus({ selected: true, hovered: legendStatus.hovered });
    setData(selectDeselectBrand(data, selectedBrand, false));
  }

  function brandHovered(selectedBrand: IChartBrand) {
    setIsCharAnimated(false);
    setLegendStatus({ selected: legendStatus.selected, hovered: true });
    if (!legendStatus.selected) {
      setData(selectDeselectBrand(data, selectedBrand, true, true));
    }
  }

  function onLegendMouseExit() {
    if (legendStatus.hovered && !legendStatus.selected) {
      setData(deselectAll(data));
    }
  }



  const chart = generateChart(selectedChartType, data);

  function mouseLeaveHandler() {
    setCrosshairValues([]);
  }
  function nearestXYHandler(value, { index }) {}

  function seriesMouseOverHandler(index: number) {
    return () => {
      //  chart.series[index].title;
    };
  }
  return (
    <React.Fragment>
      <Helmet>
        <title>Webbing Comparison</title>
        <meta name="description" content="Compare webbings with charts" />
      </Helmet>
      <AppBackgroundContainer showBackButton>
        <Wrapper>
          <Header>
            <HeaderIcon iconType="stretch_chart" />
            <span>Webbing Comparison</span>
          </Header>
          <RVStyles />
          <ChartWrapper>
            <ChartTypeText>Chart Type</ChartTypeText>
            <ChartTypeItemTextWrapper>
              {chartTypes.map((type, index) => {
                return (
                  <React.Fragment key={index}>
                    <ChartTypeItemText
                      onClick={selectChartType(type)}
                      isSelected={selectedChartType === type}
                    >
                      {type}
                    </ChartTypeItemText>
                    {index !== chartTypes.length - 1 && <Divider />}
                  </React.Fragment>
                );
              })}
            </ChartTypeItemTextWrapper>
            <ChartContainer>
              <Chart animation={isChartAnimated}>
                {/* <HorizontalGridLines />
                <VerticalGridLines /> */}
                {chart.series.map((serie, index) => {
                  return (
                    <LineMarkSeries
                      key={serie.title}
                      opacity={serie.disabled ? 0.1 : 1}
                      color={serie.color}
                      strokeStyle={'solid'}
                      size={3}
                      curve={'curveCardinal'}
                      data={serie.data}
                      onSeriesMouseOver={seriesMouseOverHandler(index)}
                    />
                  );
                })}

                <XAxis
                  title={chart.xAxisTitle}
                  tickSizeInner={0}
                  tickSizeOuter={8}
                  tickTotal={chart.xAxisTickTotal}
                  animation={false}
                />
                <YAxis
                  title={chart.yAxisTitle}
                  tickSizeInner={0}
                  tickSizeOuter={8}
                  tickTotal={chart.yAxisTickTotal}
                  animation={false}
                />
              </Chart>
            </ChartContainer>
            <Legends
              onItemHover={webbingHovered}
              onItemClick={webbingClicked}
              onSectionHover={brandHovered}
              onSectionClick={brandClicked}
              onMouseExit={onLegendMouseExit}
              data={data}
            />
          </ChartWrapper>
        </Wrapper>
      </AppBackgroundContainer>
    </React.Fragment>
  );
}

const Chart = styled(FlexibleXYPlot)`
  .rv-xy-plot__grid-lines__line {
    stroke: ${props => props.theme.border};
  }
  display: flex;
  /* .rv-xy-plot__series--line {
    stroke: ${props => props.theme.brand} !important;
  } */
`;

const Legends = styled(Legend)`
  margin: 0rem 1rem;
  width: 100%;
  ${media.desktop`
    width: auto;
    height: 100%;
  `};
`;

const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  flex: 1;
  margin-left: -10px;
  ${media.desktop`
    width: auto;
    height: 30rem;
  `};
  .rv-discrete-color-legend {
    overflow: unset;
  }
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: flex-start;
  width: 100%;
  overflow: scroll;
  ${media.desktop`
    flex-direction: row;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;
  height: 100%;
  flex: 1;
  ${media.desktop`
  `};
`;
