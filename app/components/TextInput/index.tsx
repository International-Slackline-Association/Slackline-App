import React, { memo, useState } from 'react';
import styled from '../../styles/styled-components';
import media from '../../styles/media';
import { ToggleSwitch } from 'components/ToggleSwitch';

interface Props {
  className?: string;
  type: string;
  switchValues?: string[];
  label: string;
  description?: string;
  value?: string;
  defaultValue?: string;
  onChange(value: string, switchValue: boolean): void;
}

function Component(props: Props) {
  const [switchValue, setSwitchValue] = useState(false);
  const [inputValue, setInputValue] = useState(props.value);
  const [isInputFocused, setIsInputFocused] = useState(false);

  function updateValue(evt: any) {
    setInputValue(evt.target.value);
    props.onChange(evt.target.value, switchValue);
  }

  function inputFocused(evt: any) {
    setIsInputFocused(true);
  }
  function inputFocusedOut(evt: any) {
    setIsInputFocused(false);
  }

  function toggleSelected(value: boolean) {
    setSwitchValue(value);
    if (inputValue) {
      props.onChange(inputValue, value);
    }
  }
  return (
    <Wrapper className={props.className}>
      <Label>{props.label}</Label>
      <InputWrapper>
        <Input
          cover={props.switchValues === undefined}
          type={props.type}
          onFocus={inputFocused}
          onBlur={inputFocusedOut}
          onChange={updateValue}
          value={props.value}
          defaultValue={props.defaultValue}
        />
        {props.switchValues && (
          <Switch
            id={props.label}
            toggleSelected={toggleSelected}
            leftText={props.switchValues[0]}
            rightText={props.switchValues[1]}
          />
        )}
      </InputWrapper>
      <Border focused={isInputFocused} />
      {props.description && <Description>{props.description}</Description>}
    </Wrapper>
  );
}

const Border = styled.div<{ focused?: boolean }>`
  background-color: ${props =>
    props.focused ? props.theme.brand : props.theme.text};
  height: 1px;
  width: 100%;
`;

const Switch = styled(ToggleSwitch)`
  display: flex;
  margin-bottom: 0.2rem;
`;

const Description = styled.span`
  display: flex;
  margin-top: 0.5rem;
  color: ${props => props.theme.textSecondary};
  font-size: 0.7rem;
  font-style: italic;
`;

const Label = styled.span`
  display: flex;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.textSecondary};
  font-size: 0.8rem;
  font-style: italic;
`;

const Input = styled.input<{ cover: boolean }>`
  background: transparent;
  outline: none;
  border: none;
  margin-right: 0.5rem;
  width: ${props => (props.cover ? '100%' : '25%')};
  min-width: 3rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextInput = memo(Component);
