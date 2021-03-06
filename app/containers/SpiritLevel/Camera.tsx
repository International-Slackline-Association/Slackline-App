import React, { memo, useContext, useEffect, useState } from 'react';
import styled, { ThemeContext, css } from 'styles/styled-components';
import media from 'styles/media';
import Webcam from 'react-webcam';
import { useDeviceOrientation } from 'utils/hooks/useDeviceOrientation';
import { elevatedShadow, touchableOpacity } from 'styles/mixins';
import CancelIcon from 'components/svg/cancel.svg';
import { cover, mix } from 'polished';
import { Button } from 'components/Button';
import { Spinner } from 'components/LoadingIndicator';
import { Utils } from 'utils/index';
import Portal from 'components/Modal';
import { RotateDeviceModal } from 'components/RotateDeviceModal';

interface Props {
  closeClicked(): void;
  length?: number;
}

function Component(props: Props) {
  const [orientation, screenOrientation] = useDeviceOrientation();
  const themeContext = useContext(ThemeContext);

  const webcamRef = React.useRef<Webcam>(null);
  const sliderRef = React.useRef<HTMLInputElement>(null);

  const [zoomValue, setZoomValue] = useState(0);
  const [cameraError, setCameraError] = useState<string>();

  useEffect(() => {
    if (webcamRef) {
      enableZoom();
    }
  }, [webcamRef, sliderRef]);

  let angle = 0;
  let tiltAngle = 0;
  let offLevel: number | undefined;

  if (orientation) {
    if (
      screenOrientation === 'landscape' &&
      orientation.gamma &&
      orientation.beta
    ) {
      const absAngle = 90 - Math.abs(orientation.gamma);
      angle = orientation.gamma < 0 ? -absAngle : absAngle;
      if (orientation.gamma > 0) {
        orientation.beta < 0
          ? (tiltAngle = -(180 + orientation.beta))
          : (tiltAngle = 180 - orientation.beta);
      } else {
        tiltAngle = orientation.beta;
      }
    }
  }

  angle = Utils.trimToDecimals(angle, 1);
  tiltAngle = Math.round(tiltAngle);
  offLevel =
    props.length &&
    Utils.trimToDecimals(
      props.length * Math.tan(Utils.degreesToRadians(Math.abs(angle))),
      1,
    );

  const marginAngleLimit = window.innerHeight / 2 - 100;

  // EasoutQuint effect
  let t = Utils.projectValue(Math.abs(angle), 90, 1);
  const easeoutFactor = --t * t * t + 1;
  let marginAngle = Utils.projectValue(easeoutFactor, 1, marginAngleLimit);
  if (angle < 0) {
    marginAngle = -marginAngle;
  }

  const radiantColorFactor = Utils.projectValue(easeoutFactor, 1, 100);

  if (marginAngle < -marginAngleLimit || marginAngle > marginAngleLimit) {
    marginAngle =
      marginAngle < -marginAngleLimit ? -marginAngleLimit : marginAngleLimit;
  }

  const lineAreaWidthReduction = Utils.projectValue(
    Math.abs(tiltAngle),
    90,
    window.innerHeight,
  );

  const videoConstraints = {
    facingMode: 'environment',
  };

  function enableZoom() {
    setTimeout(() => {
      if (webcamRef.current?.stream) {
        const track = webcamRef.current.stream.getVideoTracks()[0];
        const capabilities = track.getCapabilities() as any;
        const settings = track.getSettings() as any;

        // Check whether zoom is supported or not.
        if (!('zoom' in capabilities)) {
          console.log('Zoom is not supported by ' + track.label);
          return;
        }
        const slider = sliderRef.current;
        if (slider) {
          slider.min = capabilities.zoom?.min;
          slider.max = capabilities.zoom?.max;
          slider.step = capabilities.zoom?.step;
          slider.value = settings.zoom;
          slider.hidden = false;
          setZoomValue(settings.zoom);
          slider.onchange = slider.oninput = (event: any) => {
            if (event?.target?.value) {
              setZoomValue(event.target.value);
              track.applyConstraints({
                advanced: [{ zoom: event.target.value } as any],
              });
            }
          };
        }
      }
    }, 1000);
  }

  const sliderOnChange = e => {
    // setZoomValue(e.target.value);
  };

  function webcamError(error: string) {
    alert('Cannot access to the camera: ' + error);
    setCameraError(error);
  }

  return (
    <Wrapper>
      <LoadingText>
        Loading Camera
        <Loading />
      </LoadingText>
      <StyledCamera
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        ref={webcamRef}
        onUserMedia={enableZoom}
        onUserMediaError={webcamError}
      />

      <CloseButton onClick={props.closeClicked} />
      {screenOrientation === 'landscape' ? (
        <CenterWrapper>
          <LineAreaWrapper
            style={{
              transform: `translateY(${marginAngle}px `,
            }}
          >
            <ColorArea
              position="top"
              style={{
                visibility: angle < 0 ? 'visible' : 'hidden',
                opacity: easeoutFactor,
                justifyContent: angle < 0 ? 'flex-start' : 'flex-end',
                background: `radial-gradient(50% 50%, ${themeContext.red} 50%, transparent ${radiantColorFactor}%)`,
              }}
            />
            <LineWrapper>
              <DottedLine>
                <div
                  style={{
                    transform: `rotate(${-tiltAngle}deg) `,
                  }}
                />
              </DottedLine>
              <AngleText>{angle} º</AngleText>
            </LineWrapper>
            {!Utils.isNil(offLevel) && (
              <Text>
                OFF LEVEL: <span>{offLevel}</span>m
              </Text>
            )}
            <ColorArea
              position="bottom"
              style={{
                visibility: angle > 0 ? 'visible' : 'hidden',
                opacity: easeoutFactor,
                justifyContent: angle < 0 ? 'flex-start' : 'flex-end',
                background: `radial-gradient(50% 50%, ${themeContext.red} 50%, transparent ${radiantColorFactor}%)`,
              }}
            />
          </LineAreaWrapper>
        </CenterWrapper>
      ) : (
        <Portal isTransparentBackground={true} allowEvents={true} z={999}>
          <RotateDeviceModal />
        </Portal>
      )}
      <ZoomSlider
        ref={sliderRef}
        onChange={sliderOnChange}
        onInput={sliderOnChange}
        value={zoomValue}
        hidden={true}
        style={{
          visibility: screenOrientation === 'landscape' ? 'unset' : 'hidden',
        }}
      />
    </Wrapper>
  );
}

const ZoomSlider = styled.input.attrs({ type: 'range' })`
  position: absolute;
  margin: auto;
  right: -2rem;
  -webkit-appearance: none;
  width: 50vh;
  height: 4px;
  border-radius: 10px;
  background: ${props => props.theme.text};
  outline: none;
  transform-origin: center;
  transform: rotate(-90deg);
  pointer-events: visible;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${props => props.theme.text};
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }
`;
const ColorArea = styled.div<{ position: 'bottom' | 'top' }>`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 3rem;
  clip-path: ${props =>
    `inset(${props.position === 'bottom' ? '50%' : '0'} 0 ${
      props.position === 'top' ? '50%' : '0'
    } 0)`};
`;

const AngleText = styled.span`
  margin: 0 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
`;

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const LineAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(50% + 3rem + 1.5rem / 2);
  margin-top: auto;
  justify-content: space-between;
`;

const CustomButton = styled(Button)`
  margin-bottom: 1rem;
  font-size: 0.8rem;
  border-radius: 2rem;
`;

const Text = styled.span`
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  /* opacity: 0.5; */
  & span {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const DottedLine = styled.div`
  position: relative;
  border-top: 2px dashed ${props => props.theme.text};
  height: 1px;
  width: 50%;
  margin-left: 12.5%;
  transform-origin: center;

  & div {
    ${cover()}
    top: unset;
    border-top: 2px dashed ${props => props.theme.text};
    /* height: 0px; */
    opacity: 1;
    transform-origin: center;
    border-color: ${props => props.theme.brand};
  }
`;

const StyledCamera = styled(Webcam)<{ ref?: any }>`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  /* z-index: 0; */
  overflow: hidden;
`;

const CloseButton = styled.img.attrs({ src: CancelIcon })`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 1.2rem;
  ${touchableOpacity}
`;

const Loading = styled(Spinner)`
  width: 2rem;
  height: 2rem;
  margin-top: 1rem;
`;

const LoadingText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  word-break: keep-all;
  line-break: strict;
  left: 25%;
  right: 25%;
  top: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

const Wrapper = styled.div`
  ${cover()}
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.surface};
  z-index: 2;
`;

export const Camera = memo(Component);
