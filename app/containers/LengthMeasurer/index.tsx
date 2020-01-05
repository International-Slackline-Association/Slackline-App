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
import { LengthMeasurerHelmet } from 'components/DocumentHeaders/LengthMeasurerHelmet';
import { TextInput } from 'components/TextInput';
import { useInput } from 'utils/hooks/useInput';
import { useVisitAnalytics } from 'utils/hooks/analytics';
import { useCheckDeviceOrientation } from 'utils/hooks/useCheckDeviceOrientation';
import { Utils } from 'utils/index';

// const descriptionClickedKey = 'length-measurer-description-closed';
const storageKey = 'length-measurer-length';

interface Props {}

export default function LengthMeasurer(props: Props) {
  useVisitAnalytics('length_measurer_visit');

  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  useCheckDeviceOrientation();
  const [orientation] = useDeviceOrientation();

  const {
    value: length,
    valueString: lengthString,
    updateValue: updateLengthValue,
  } = useInput(
    storageKey,
    'length',
    { type: 'float', decimalLimit: 1 },
    { initial: 2, min: 0 },
  );

  useEffect(() => {
    setTimeout(() => {
      if (!isMobile) {
        alert(`Length Measurer works with mobiles devices only`);
      }
      // setIsDescriptionOpen(
      //   getStorageItem(descriptionClickedKey) ? false : true,
      // );
    }, 200);
  }, []);

  function cameraClicked() {
    Utils.requestMotionEventPermission().then(granted => {
      if (granted !== undefined && !granted) {
        alert('You have disabled motion and orientation access!');
      }
    });

    setIsCameraActive(true);
  }

  function cancelCamera() {
    setIsCameraActive(false);
  }

  function descriptionToggled(open: boolean) {
    // setStorageItem(descriptionClickedKey, 'true');
  }

  return (
    <React.Fragment>
      <LengthMeasurerHelmet />
      <AppBackgroundContainer showBackButton>
        <Wrapper>
          {!isCameraActive ? (
            <React.Fragment>
              <Header>
                <HeaderIcon iconType="length_measurer" />
                <span>Length Measurer</span>
              </Header>
              <CustomExpandableTextArea
                height={750}
                isOpen={isDescriptionOpen}
                toggled={descriptionToggled}
                title={'Description & Instructions'}
              >
                <Description />
              </CustomExpandableTextArea>
              <Input
                switchValues={['meters', 'feet']}
                type="number"
                label="Length of defined rope/sling"
                onChange={updateLengthValue}
                value={lengthString}
              />
              <CustomButton
                disabled={!length || length <= 0}
                onClick={cameraClicked}
              >
                Open Camera
              </CustomButton>
            </React.Fragment>
          ) : (
            <Camera closeClicked={cancelCamera} knownDistance={length!} />
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
