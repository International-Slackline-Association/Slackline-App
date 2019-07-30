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

interface Props extends RouteComponentProps {}

export default function TensionCalculator(props: Props) {
  const [length, setLength] = useState('50');
  const [weight, setWeight] = useState('75');
  const [sag, setSag] = useState('4');

  const dispatch = useDispatch();

  function updateLengthValue(value: string, switchValue?: boolean) {
    setLength(value);
  }
  function updateWeightValue(value: string, switchValue?: boolean) {
    setWeight(value);
  }
  function updateSagValue(value: string, switchValue?: boolean) {
    setSag(value);
  }

  return (
    // tslint:disable-next-line: jsx-wrap-multiline
    <AppBackgroundContainer>
      <Wrapper>
        <Header>
          <HeaderIcon iconType="tension" />
          <span>Tension Calculator</span>
        </Header>
        <Drawing device={'desktop'} src={DrawingSVG} />
        <Drawing device={'mobile'} src={DrawingMobileSVG} />
        <InputsWrapper>
          <Input
            switchValues={['meters', 'feet']}
            type="number"
            label="Length"
            onChange={updateLengthValue}
            value={length}
          />
          <Input
            switchValues={['kilogram', 'pounds']}
            type="number"
            label="Weight"
            onChange={updateWeightValue}
            value={weight}
          />
          <Input
            switchValues={['meters', 'feet']}
            type="number"
            label="Sag"
            onChange={updateSagValue}
            value={sag}
          />
        </InputsWrapper>
      </Wrapper>
    </AppBackgroundContainer>
  );
}

const Input = styled(TextInput)`
  margin: 1rem 1rem;
  width: 13rem;
`;

const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
