import React, { useState, useEffect } from 'react';
import AppBackgroundContainer from 'components/AppBackgroundContainer';
import styled from 'styles/styled-components';
import media from 'styles/media';
import { Icon } from 'components/Icons/Icon';
import { TextInput } from 'components/TextInput';
import { RouteComponentProps } from 'react-router';
import { useDispatch } from 'react-redux';
import { replace } from 'connected-react-router';
import DrawingSVG from './drawing.svg';
import DrawingMobileSVG from './drawing_mobile.svg';
import { convertLength } from 'components/Converter/Length/formula';
import { convertMass } from 'components/Converter/Mass/formula';
import { Helmet } from 'react-helmet';

export default function TraditionalTensionCalculator() {
  const [length, setLength] = useState(50);
  const [weight, setWeight] = useState(75);
  const [sag, setSag] = useState(4);
  const [tension, setTension] = useState<number>();

  const [lengthString, setLengthString] = useState(length.toString());
  const [weightString, setWeightString] = useState(weight.toString());
  const [sagString, setSagString] = useState(sag.toString());

  useEffect(() => {
    updateTension();
  }, [length, weight, sag]);

  const dispatch = useDispatch();

  function updateLengthValue(value: string, switchValue?: boolean) {
    let v = parseInt(value, 10);
    if (v <= 0) {
      v = 1;
    }
    setLengthString(v.toString());
    if (switchValue) {
      v = convertLength(undefined, v)!.meters;
    }
    setLength(v);
  }
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
  }
  function updateSagValue(value: string, switchValue?: boolean) {
    let v = parseFloat(parseFloat(value).toFixed(1));
    if (v <= 0) {
      v = 1;
    }
    setSagString(v.toString());
    if (switchValue) {
      v = convertLength(undefined, v)!.meters;
    }
    setSag(v);
  }

  function updateTension() {
    if (length && weight && sag) {
      const tension = (length * weight) / (sag * 400);
      setTension(tension);
    }
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
            <HeaderIcon iconType="traditional_tension_calculator" />
            <span>Traditional Tension Calculator</span>
          </Header>
          <Drawing device={'desktop'} src={DrawingSVG} />
          <Drawing device={'mobile'} src={DrawingMobileSVG} />
          <InputsWrapper>
            <Input
              switchValues={['meters', 'feet']}
              type="number"
              label="Length"
              onChange={updateLengthValue}
              value={lengthString}
            />
            <Input
              switchValues={['kilogram', 'pounds']}
              type="number"
              label="Weight"
              onChange={updateWeightValue}
              value={weightString}
            />
            <Input
              switchValues={['meters', 'feet']}
              type="number"
              label="Sag"
              onChange={updateSagValue}
              value={sagString}
            />
          </InputsWrapper>
          {tension && (
            <React.Fragment>
              <Result>Results</Result>
              <ResultText>
                Approximate Tension:&nbsp;<b>{tension.toFixed(2)} kn</b>
              </ResultText>
            </React.Fragment>
          )}
        </Wrapper>
      </AppBackgroundContainer>
    </React.Fragment>
  );
}

const Result = styled.span`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ResultText = styled.span`
  display: flex;
  width: 100%;
  white-space: nowrap;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled(TextInput)`
  margin: 1rem 1rem;
  width: 13rem;
`;

const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  ${media.desktop`
  `};
`;

const Drawing = styled.img<{ device: 'mobile' | 'desktop' }>`
  display: ${props => (props.device === 'mobile' ? 'flex' : 'none')};
  width: 100%;
  ${media.desktop`
    display: ${props => (props.device === 'mobile' ? 'none' : 'flex')};
  `};
`;

const HeaderIcon = styled(Icon)`
  display: flex;
  flex: none;
  width: 5rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  ${media.desktop`
    margin-top: 3rem;
  `};
  & span {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.05rem;
    margin-top: 1rem;
    ${media.desktop`
      font-size: 1.5em;
  `};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  ${media.desktop`
  `};
`;
