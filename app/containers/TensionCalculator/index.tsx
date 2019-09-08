import React, { useState, useEffect } from 'react';
import AppBackgroundContainer from 'components/AppBackgroundContainer';
import styled from 'styles/styled-components';
import media from 'styles/media';
import { Icon } from 'components/Icons/Icon';
import { TextInput } from 'components/TextInput';
import { RouteComponentProps } from 'react-router';
import { useDispatch } from 'react-redux';
import { replace } from 'connected-react-router';

import { convertLength } from 'components/Converter/Length/formula';
import { convertMass } from 'components/Converter/Mass/formula';
import { Helmet } from 'react-helmet';
import { ExpandableInfoArea } from 'components/ExpandableInfoArea';
import { Description } from './Description';
import { Button } from 'components/Button';
import Portal from 'components/Modal';
import { Measure } from './Measure';
import { useDeviceOrientation } from './useDeviceOrientation';
import { getStorageItem, setStorageItem } from 'utils/storage';
import { isMobile } from 'react-device-detect';

const descriptionClickedKey = 'tension-calculator-description-closed';
const weightKey = 'tension-calculator-weight';

export default function TensionCalculator() {
  const defaultWeight = parseInt(getStorageItem(weightKey) || '75', 10);
  const [weight, setWeight] = useState(defaultWeight);
  const [weightString, setWeightString] = useState(weight.toString());
  const [isMeasuringActive, setIsMeasuringActive] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const orientation = useDeviceOrientation();
  // if (!orientation) {
  //   setTimeout(() => {
  //     alert(`Cannot access device's motion sensors `);
  //   }, 1000);
  // }
  // if (!isMobile) {
  //   setTimeout(() => {
  //     alert(`Tension Calculator works with mobiles devices only`);
  //   }, 1000);
  // }
  useEffect(() => {
    setTimeout(() => {
      setIsDescriptionOpen(
        getStorageItem(descriptionClickedKey) ? false : true,
      );
    }, 200);
  }, []);

  function updateWeightValue(value: string, switchValue?: boolean) {
    let v = parseInt(value, 10);
    if (v <= 0) {
      v = 1;
    }
    setWeightString(v.toString());
    if (switchValue) {
      v = convertMass(undefined, v)!.kg;
    }
    setWeight(v);
    setStorageItem(weightKey, v.toString());
  }
  function measureClicked() {
    setIsMeasuringActive(true);
  }

  function cancelMeasuring() {
    setIsMeasuringActive(false);
  }

  function descriptionToggled(open: boolean) {
    setStorageItem(descriptionClickedKey, 'true');
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Tension Calculator</title>
        <meta
          name="description"
          content="Calculate the tension(force) of the line"
        />
      </Helmet>
      <AppBackgroundContainer showBackButton>
        <Wrapper>
          <Header>
            <HeaderIcon iconType="tension_calculator" />
            <span>Tension Calculator</span>
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
            switchValues={['kilogram', 'pounds']}
            type="number"
            label="Weight"
            // tslint:disable-next-line: max-line-length
            description="* The weight of the person in the middle of the line (include the line weight for the longer lines)"
            onChange={updateWeightValue}
            value={weightString}
          />
          <CustomButton disabled={!orientation} onClick={measureClicked}>
            Measure Tension
          </CustomButton>

          {isMeasuringActive && (
            <Portal isTransparentBackground={true}>
              <Measure weight={weight} closeClicked={cancelMeasuring} />
            </Portal>
          )}
        </Wrapper>
      </AppBackgroundContainer>
    </React.Fragment>
  );
}

const CustomButton = styled(Button)`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  border-radius: 2rem;
`;

const Input = styled(TextInput)`
  margin: 0rem 1rem;
  width: 13rem;
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
