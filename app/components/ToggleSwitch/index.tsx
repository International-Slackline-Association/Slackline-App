import React, { memo, useState } from 'react';
import styled from '../../styles/styled-components';
import media from '../../styles/media';

interface Props {
  className?: string;
  id: string;
  leftText: string;
  rightText: string;
  toggleSelected(value: boolean): void;
}

function Component(props: Props) {
  const [value, setValue] = useState(false);

  function inputSelected(evt: any) {
    const selected = evt.target.checked;
    props.toggleSelected(selected);
    setValue(selected);
  }
  return (
    <Wrapper className={props.className}>
      <Text isSelected={value === false}>{props.leftText}</Text>
      <SwitchWrapper>
        <Input
          onChange={inputSelected}
          defaultChecked={false}
          type="checkbox"
          id={props.id}
        />
        <Label htmlFor={props.id}>Toggle</Label>
      </SwitchWrapper>
      <Text isSelected={value === true}>{props.rightText}</Text>
    </Wrapper>
  );
}
const Text = styled.span<{ isSelected: boolean }>`
  text-align: center;
  margin: 0rem 0.3rem;
  font-size: 0.7rem;
  font-style: italic;
  color: ${props =>
    props.isSelected ? props.theme.text : props.theme.textSecondary};
`;

const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Label = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  min-width: 2rem;
  width: 2.5rem;
  height: calc(1rem + 4px);
  /* background: ${props => props.theme.text}; */
  display: block;
  border: 1px solid ${props => props.theme.text};
  border-radius: 100rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 1rem;
    height: 1rem;
    background-color: ${props => props.theme.text};
    border-radius: 100rem;
    transition: 0.3s;
  }
  &:active:after {
    width: 24px;
  }
`;

const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + ${Label} {
    /* background: ${props => props.theme.text}; */
  }

  &:checked + ${Label}:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-self: center; */
`;

export const ToggleSwitch = memo(Component);
