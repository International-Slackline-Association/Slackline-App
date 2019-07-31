import React, { memo, useState, useEffect } from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import ArrowSvg from '../../svg/DoubledArrow.svg';
import { convertLength } from './formula';
import { Wrapper, InputsWrapper, Arrow, Header } from '../SharedComponents';
import { TextInput } from 'components/TextInput';

interface Props {}

function Component(props: Props) {
  const [kn, setKn] = useState(10);
  const [newton, setNewton] = useState<number>(0);
  const [kgf, setKgf] = useState<number>(0);
  const [lbf, setLbf] = useState<number>(0);

  useEffect(() => {
    calculate(kn);
  }, []);

  function calculate(kn?: number, newton?: number, kgf?: number, lbf?: number) {
    const values = convertLength(kn, newton, kgf, lbf);
    if (values) {
      setKn(values.kn);
      setNewton(values.n);
      setKgf(values.kgf);
      setLbf(values.lbf);
    }
  }

  function updateKn(value: string) {
    let v = parseFloat(value);
    v = v <= 0 ? 1 : v;
    setKn(v);
    calculate(v);
  }

  function updateNewton(value: string) {
    let v = parseFloat(value);
    v = v <= 0 ? 1 : v;
    setNewton(v);
    calculate(undefined, v);
  }

  function updateKgf(value: string) {
    let v = parseFloat(value);
    v = v <= 0 ? 1 : v;
    setKgf(v);
    calculate(undefined, undefined, v);
  }

  function updateLgf(value: string) {
    let v = parseFloat(value);
    v = v <= 0 ? 1 : v;
    setLbf(v);
    calculate(undefined, undefined, v);
  }

  return (
    <Wrapper>
      <Header>
        <span>Force</span>
      </Header>
      <InputsWrapper>
        <Input
          type="number"
          label="kN"
          onChange={updateKn}
          value={parseFloat(kn.toFixed(2)).toString()}
        />
        <Arrow src={ArrowSvg} />
        <Input
          type="number"
          label="N"
          onChange={updateNewton}
          value={parseFloat(newton.toFixed(2)).toString()}
        />
        <Arrow src={ArrowSvg} />
        <Input
          type="number"
          label="kgf"
          onChange={updateKgf}
          value={parseFloat(kgf.toFixed(2)).toString()}
        />
        <Arrow src={ArrowSvg} />
        <Input
          type="number"
          label="lbf"
          onChange={updateLgf}
          value={parseFloat(lbf.toFixed(2)).toString()}
        />
      </InputsWrapper>
    </Wrapper>
  );
}

export const Input = styled(TextInput)`
  width: 6rem;
  margin: 1rem 1rem;
`;

export const ForceConverter = memo(Component);
