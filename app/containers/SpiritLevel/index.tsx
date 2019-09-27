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

const descriptionClickedKey = 'spirit-level-description-closed';
interface Props extends ConnectedRouterProps {}

export default function SpiritLevel(props: Props) {
  console.log(props);
  const [isCameraActive, setIsCameraActive] = useState(true);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const [orientation] = useDeviceOrientation();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (!orientation) {
        alert(`Cannot access device's motion sensors `);
      }
      if (!isMobile) {
        alert(`Spirit Level works with mobiles devices only`);
      }
      setIsDescriptionOpen(
        getStorageItem(descriptionClickedKey) ? false : true,
      );
    }, 200);
  }, []);

  function cameraClicked() {
    setIsCameraActive(true);
  }

  function cancelCamera() {
    setIsCameraActive(false);
    if (props.history.action === 'POP') {
      dispatch(push('/'));
    } else {
      dispatch(goBack());
    }
  }

  function descriptionToggled(open: boolean) {
    setStorageItem(descriptionClickedKey, 'true');
  }
  return (
    <React.Fragment>
      <Helmet>
        <title>Spirit Level</title>
        <meta name="description" content="Level your anchors" />
      </Helmet>
      <Camera closeClicked={cancelCamera} />
      {/* <AppBackgroundContainer showBackButton>
        <Wrapper>
          <Header>
            <HeaderIcon iconType="spirit_level" />
            <span>Spirit Level</span>
          </Header>
           <CustomExpandableTextArea
            height={500}
            isOpen={isDescriptionOpen}
            toggled={descriptionToggled}
            title={'Description & Instructions'}
          >
            <Description />
          </CustomExpandableTextArea>
          <CustomButton disabled={!orientation} onClick={cameraClicked}>
            Open Camera
          </CustomButton>

          {isCameraActive && (
            <Portal isTransparentBackground={false}>
              <Camera closeClicked={cancelCamera} />
            </Portal>
          )}
        </Wrapper>
      </AppBackgroundContainer> */}
    </React.Fragment>
  );
}

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
