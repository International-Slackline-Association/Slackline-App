import React, { memo, useContext, useState } from 'react';
import styled, { ThemeContext } from 'styles/styled-components';
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
import { RotateDeviceModal } from '../../components/RotateDeviceModal';
import CrosshairIcon from './crosshair.svg';

interface Props {
  closeClicked(): void;
  knownDistance: number;
}

let markedAlpha = 0;

function Component(props: Props) {
  const [orientation, screenOrientation] = useDeviceOrientation();
  const [isAnchorMarked, setIsAnchorMarked] = useState(false);

  let currentAlpha = 0;
  if (orientation) {
    if (
      screenOrientation === 'landscape' &&
      orientation.alpha &&
      orientation.gamma
    ) {
      currentAlpha = orientation.alpha;
      if (orientation.gamma > 0) {
        currentAlpha = (180 + orientation.alpha) % 360;
      }
    }
  }

  let distance: number | undefined;

  if (isAnchorMarked && markedAlpha) {
    const angle = Math.abs(currentAlpha - markedAlpha);
    distance = Math.tan(Utils.degreesToRadians(angle)) * props.knownDistance;
    distance = Utils.trimToDecimals(distance, 1);
  }

  const videoConstraints = {
    facingMode: 'environment',
  };

  function buttonClicked() {
    if (isAnchorMarked) {
      markedAlpha = 0;
      setIsAnchorMarked(false);
    } else {
      markedAlpha = currentAlpha;
      setIsAnchorMarked(true);
    }
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
      />

      <CloseButton onClick={props.closeClicked} />
      {screenOrientation === 'landscape' ? (
        <React.Fragment>
          <Crosshair />
          <CenterWrapper>
            {isAnchorMarked ? (
              !Utils.isNil(distance) && distance! >= 0 ? (
                <Text>
                  <span>{distance}</span> m
                </Text>
              ) : (
                <Text>️Invalid distance ⚠️</Text>
              )
            ) : (
              <Text>Point to the close anchor, then press Start</Text>
            )}
            {isAnchorMarked ? (
              <CustomButton onClick={buttonClicked}>Measure Again</CustomButton>
            ) : (
              <CustomButton key="keyforrenderingagain" onClick={buttonClicked}>
                Start Measuring
              </CustomButton>
            )}
          </CenterWrapper>
        </React.Fragment>
      ) : (
        <Portal isTransparentBackground={true} allowEvents={true} z={999}>
          <RotateDeviceModal />
        </Portal>
      )}
    </Wrapper>
  );
}

const Crosshair = styled.img.attrs({
  src: CrosshairIcon,
})`
  display: flex;
  position: absolute;
  margin: auto;
  width: 3rem;
  height: 3rem;
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;
  margin-top: auto;
  justify-content: space-between;
`;

const CustomButton = styled(Button)`
  margin-bottom: 1rem;
  font-size: 0.8rem;
  border-radius: 2rem;
`;

const Text = styled.span`
  margin-top: 2.5rem;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  & span {
    font-size: 2rem;
  }
`;

const StyledCamera = styled(Webcam)`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
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
  z-index: -1;
`;

const Wrapper = styled.div`
  ${cover()}
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.surface};
`;

export const Camera = memo(Component);
