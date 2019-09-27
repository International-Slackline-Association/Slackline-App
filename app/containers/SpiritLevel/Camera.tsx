import React, { memo, useContext } from 'react';
import styled, { ThemeContext } from 'styles/styled-components';
import media from 'styles/media';
import Webcam from 'react-webcam';
import { useDeviceOrientation } from 'utils/hooks/useDeviceOrientation';
import { elevatedShadow, touchableOpacity } from 'styles/mixins';
import CancelIcon from 'components/svg/cancel.svg';
import { cover, mix } from 'polished';
import { Button } from 'components/Button';
import { Spinner } from 'components/LoadingIndicator';

interface Props {
  closeClicked(): void;
}

const marginAngleLimit = window.innerHeight / 2;

function Component(props: Props) {
  const [orientation, screenOrientation] = useDeviceOrientation();
  const themeContext = useContext(ThemeContext);

  let angle = 0;
  if (orientation) {
    if (screenOrientation === 'landscape' && orientation.gamma) {
      const absAngle = 90 - Math.abs(orientation.gamma);
      angle = orientation.gamma < 0 ? absAngle : -absAngle;
    }
    if (screenOrientation === 'portrait' && orientation.beta) {
      const absAngle = 90 - orientation.beta;
      angle = absAngle;
    }
  }

  angle = parseInt(angle.toFixed(0), 10);

  let marginAngle = -angle * 3;
  if (marginAngle < -marginAngleLimit || marginAngle > marginAngleLimit) {
    marginAngle =
      marginAngle < -marginAngleLimit ? -marginAngleLimit : marginAngleLimit;
  }

  const videoConstraints = {
    facingMode: 'environment',
  };

  function takePhotoClicked() {}
  return (
    <Wrapper>
      <WarningText>
        Loading Camera
        <Loading />
      </WarningText>
      <StyledCamera
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />

      <CloseButton onClick={props.closeClicked} />

      <CenterWrapper>
        <LineAreaWrapper
          style={{
            transform: `translateY(${marginAngle}px`,
          }}
        >
          <ColorArea
            position="top"
            style={{
              visibility: angle > 0 ? 'visible' : 'hidden',
              opacity: Math.abs(angle) / 45,
              justifyContent: angle < 0 ? 'flex-start' : 'flex-end',
              background: `radial-gradient(50% 100%, ${
                themeContext.red
              } 50%, transparent 100%)`,
            }}
          />
          <LineWrapper>
            <DottedLine />
            <AngleText>{angle} º</AngleText>
          </LineWrapper>
          {/* <Text>KEEP CENTERED</Text> */}
          <ColorArea
            position="bottom"
            style={{
              visibility: angle < 0 ? 'visible' : 'hidden',
              opacity: Math.abs(angle) / 60,
              justifyContent: angle < 0 ? 'flex-start' : 'flex-end',
              background: `radial-gradient(50% 100%, ${
                themeContext.red
              } 50%, transparent 100%)`,
            }}
          />
        </LineAreaWrapper>

        {/* <CustomButton onClick={takePhotoClicked}>Freeze</CustomButton> */}
      </CenterWrapper>
    </Wrapper>
  );
}

const ColorArea = styled.div<{ position: 'bottom' | 'top' }>`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 3rem;
  clip-path: ${props =>
    `inset(${props.position === 'bottom' ? '50%' : '0'} 0 ${
      props.position === 'top' ? '50%' : '0'
    } 0)`};
  & div {
    display: flex;
    width: 100%;
    height: 50%;
    background-color: ${props => props.theme.surface};
  }
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
  font-size: 0.8rem;
  text-align: center;
  /* opacity: 0.5; */
`;

const DottedLine = styled.div`
  border-top: 2px dashed ${props => props.theme.text};
  /* border-width: 2px; */
  height: 1px;
  width: 50%;
  /* opacity: 0.5; */
  margin-left: 12.5%;
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

const WarningText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
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
`;

export const Camera = memo(Component);
