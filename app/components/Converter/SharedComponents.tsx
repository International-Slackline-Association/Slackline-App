import React, { memo, useState, useEffect } from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import { TextInput } from 'components/TextInput';

export const Arrow = styled.img`
  transform: rotate(90deg);
  width: 2rem;
  margin: 1rem 1rem;
  align-self: center;
  ${media.desktop`
    transform: rotate(0deg);
  `};
`;

export const Input = styled(TextInput)`
  width: 6rem;
  margin: 1rem 1rem;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  background-color: ${props => props.theme.surface};
  border-radius: 1rem;
  ${media.desktop`
    flex-direction: row;
  `};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  ${media.desktop`
  `};
  & span {
    font-size: 1rem;
    text-align: center;
    color: ${props => props.theme.brand};
    ${media.desktop`
  `};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.desktop`
    flex-direction: column;
  `};
`;
