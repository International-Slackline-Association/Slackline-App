import React, { memo, useState, useEffect } from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import ArrowSvg from '../../svg/DoubledArrow.svg';
import { convertLength } from './formula';
import { Wrapper, InputsWrapper, Arrow, Input, Header } from '../SharedComponents';

interface Props {}

function Component(props: Props) {
  const [meter, setMeter] = useState(100);
  const [feet, setFeet] = useState<number>(0);
  const [inch, setInch] = useState<number>(0);

  useEffect(() => {
    calculate(meter);
  }, []);

  function calculate(meter?: number, feet?: number, inch?: number) {
    const values = convertLength(meter, feet, inch);
    if (values) {
      setMeter(values.meters);
      setFeet(values.feet);
      setInch(values.inches);
    }
  }

  function updateMeters(value: string) {
    let v = parseFloat(value);
    v = v <= 0 ? 1 : v;
    setMeter(v);
    calculate(v);
  }

  function updateFeet(value: string) {
    let v = parseFloat(value);
    v = v <= 0 ? 1 : v;
    setFeet(v);
    calculate(undefined, v);
  }

  function updateInch(value: string) {
    let v = parseFloat(value);
    v = v <= 0 ? 1 : v;
    setInch(v);
    calculate(undefined, undefined, v);
  }

  return (
    <Wrapper>
      <Header>
        <span>Length</span>
      </Header>
      <InputsWrapper>
        <Input
          type="number"
          label="Meters"
          onChange={updateMeters}
          value={parseFloat(meter.toFixed(2)).toString()}
        />
        <Arrow src={ArrowSvg} />
        <Input
          type="number"
          label="Feet"
          onChange={updateFeet}
          value={parseFloat(feet.toFixed(2)).toString()}
        />
        <Arrow src={ArrowSvg} />
        <Input
          type="number"
          label="Inches"
          onChange={updateInch}
          value={parseFloat(inch.toFixed(2)).toString()}
        />
      </InputsWrapper>
    </Wrapper>
  );
}


export const LengthConverter = memo(Component);
