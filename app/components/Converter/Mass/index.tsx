import React, { memo, useState, useEffect } from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import ArrowSvg from '../../svg/DoubledArrow.svg';
import { convertMass } from './formula';
import { Wrapper, InputsWrapper, Arrow, Input, Header } from '../SharedComponents';

interface Props {}

function Component(props: Props) {
  const [kilogram, setKilogram] = useState(100);
  const [pound, setPound] = useState<number>(0);
  const [ton, setTon] = useState<number>(0);

  useEffect(() => {
    calculate(kilogram);
  }, []);

  function calculate(kg?: number, pound?: number, ton?: number) {
    const values = convertMass(kg, pound, ton);
    if (values) {
      setKilogram(values.kg);
      setPound(values.pound);
      setTon(values.ton);
    }
  }

  function updateKilogram(value: string) {
    let v = parseFloat(value);
    v = v <= 0 ? 1 : v;
    setKilogram(v);
    calculate(v);
  }

  function updatePound(value: string) {
    let v = parseFloat(value);
    v = v <= 0 ? 1 : v;
    setPound(v);
    calculate(undefined, v);
  }

  function updateTon(value: string) {
    let v = parseFloat(value);
    v = v <= 0 ? 1 : v;
    setTon(v);
    calculate(undefined, undefined, v);
  }

  return (
    <Wrapper>
      <Header>
        <span>Mass</span>
      </Header>
      <InputsWrapper>
        <Input
          type="number"
          label="Kilogram"
          onChange={updateKilogram}
          value={parseFloat(kilogram.toFixed(2)).toString()}
        />
        <Arrow src={ArrowSvg} />
        <Input
          type="number"
          label="Pound"
          onChange={updatePound}
          value={parseFloat(pound.toFixed(2)).toString()}
        />
        <Arrow src={ArrowSvg} />
        <Input
          type="number"
          label="Ton"
          onChange={updateTon}
          value={parseFloat(ton.toFixed(2)).toString()}
        />
      </InputsWrapper>
    </Wrapper>
  );
}

export const MassConverter = memo(Component);
