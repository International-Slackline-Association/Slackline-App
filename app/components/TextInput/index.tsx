import React, { memo, useState } from 'react';
import styled from '../../styles/styled-components';
import media from '../../styles/media';

interface Props {
  label: string;
}

function Component(props: Props) {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <Input />
    </Wrapper>
  );
}

const Label = styled.span`
  margin-bottom: 0.5em;
  color: ${props => props.theme.textSecondary};
  font-size: 0.8em;
  font-style: italic;
`;

const Input = styled.input`
  background: transparent;
  outline: none;
  /* border: none; */
  border-width: 0 0 1px;
  border-color: ${props => props.theme.text};

  &:focus {
    border-color: ${props => props.theme.brand};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextInput = memo(Component);
