import React, { useEffect, useState } from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import { getStorageItem, setStorageItem } from 'utils/storage';
import { isMobile } from 'react-device-detect';
import { useDeviceOrientation } from 'utils/hooks/useDeviceOrientation';
import { Button } from 'components/Button';
import { Icon } from 'components/Icons/Icon';
import { ExpandableInfoArea } from 'components/ExpandableInfoArea';
import { Helmet } from 'react-helmet';
import AppBackgroundContainer from 'components/AppBackgroundContainer';
import { Description } from './Description';
import Portal from 'components/Modal';
import { Camera } from './Camera';
import { useDispatch } from 'react-redux';
import { goBack, ConnectedRouterProps, push } from 'connected-react-router';
import { SpiritLevelHelmet } from 'components/DocumentHeaders/SpiritLevelHelmet';
import { TextInput } from 'components/TextInput';
import { useInput } from 'utils/hooks/useInput';
import { useVisitAnalytics } from 'utils/hooks/analytics';
import { Utils } from 'utils/index';
import { useCheckDeviceOrientation } from 'utils/hooks/useCheckDeviceOrientation';
// import { useCheckDeviceOrientation } from 'utils/hooks/useCheckDeviceOrientation';

const descriptionClickedKey = 'spirit-level-description-closed';
const storageKey = 'spirit-level-length';

interface Props {}

export default function SpiritLevel(props: Props) {
  useVisitAnalytics('spirit_level_visit');

  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const {
    value: length,
    valueString: lengthString,
    updateValue: updateLengthValue,
  } = useInput(storageKey, 'length', { type: 'float', decimalLimit: 1 });

  useCheckDeviceOrientation();
  const [orientation] = useDeviceOrientation();

  useEffect(() => {
    setTimeout(() => {
      if (!isMobile) {
        alert(`Hozitontal Leveling works only on mobiles devices`);
      }
      setIsDescriptionOpen(
        getStorageItem(descriptionClickedKey) ? false : true,
      );
    }, 200);
  }, []);

  function cameraClicked() {
    Utils.requestMotionEventPermission().then(granted => {
      if (granted !== undefined && !granted) {
        alert('You have disabled motion and orientation access!');
      }
    });
    document.documentElement.requestFullscreen();
    setIsCameraActive(true);
  }

  function cancelCamera() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setIsCameraActive(false);
  }

  function descriptionToggled(open: boolean) {
    setStorageItem(descriptionClickedKey, 'true');
  }
  return (
    <React.Fragment>
      <SpiritLevelHelmet />
      <AppBackgroundContainer showBackButton>
        <Wrapper>
          {!isCameraActive ? (
            <React.Fragment>
              <Header>
                <HeaderIcon iconType="spirit_level" />
                <span>Horizontal Leveling</span>
              </Header>
              <CustomExpandableTextArea
                height={500}
                isOpen={isDescriptionOpen}
                toggled={descriptionToggled}
                title={'Description & Instructions'}
              >
                <Description />
              </CustomExpandableTextArea>
              <Input
                switchValues={['meters', 'feet']}
                type="number"
                label="Length (Optional)"
                description={'The length of the slackline or the gap'}
                onChange={updateLengthValue}
                value={lengthString}
              />
              <CustomButton onClick={cameraClicked}>Open Camera</CustomButton>
            </React.Fragment>
          ) : (
            <Camera closeClicked={cancelCamera} length={length} />
          )}
        </Wrapper>
      </AppBackgroundContainer>
    </React.Fragment>
  );
}

const Input = styled(TextInput)`
  margin: 0rem 1rem;
  width: 13rem;
`;

const CustomButton = styled(Button)`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  border-radius: 2rem;
`;

const CustomExpandableTextArea = styled(ExpandableInfoArea)`
  max-width: 100%;
  padding: 0rem 1rem;
  margin-bottom: 1rem;
`;

const HeaderIcon = styled(Icon)`
  display: flex;
  flex: none;
  width: 3rem;
  margin-left: 1rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  & span {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.05rem;
    margin-top: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;
`;
