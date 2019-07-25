import React, { memo, useState } from 'react';
import styled, { css, keyframes } from '../../styles/styled-components';
import media from '../../styles/media';
import { lighten, rgba } from 'polished';

interface Props {
  isLoading: boolean;
}
const buttonLoadingAnimtionSpin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadableButton = styled.button<Props>`
  display: block;
  border: none;
  background-color: ${props => props.theme.brand};
  border-radius: 3px;
  font-weight: bold;
  /* font-size: 1em; */
  padding: 1em 2em;
  outline: none;
  cursor: pointer;
  /* line-height: 14px; */
  transition: all 0.2s;
  color: ${props => props.theme.text};
  user-select: none;
  position: relative;

  ${props =>
    props.isLoading &&
    css`
      background-color: ${p => `${lighten(0.05, p.theme.brand)} !important`};
      color: rgba(0, 0, 0, 0) !important;

      &::after {
        position: absolute;
        display: block;
        content: '';
        width: 1em;
        height: 1em;
        border: 2px solid
          ${p => p.theme.text && rgba(p.theme.text, 0.1)};
        border-top-color: ${p => p.theme.text};
        border-left-color: ${p => p.theme.text};
        border-radius: 50%;
        animation: ${buttonLoadingAnimtionSpin} 0.75s linear infinite;
        top: 50%;
        left: 50%;
        margin-top: -0.5em;
        margin-left: -0.5em;
      }
    `} &:hover {
    transition: all 0.2s;
    background-color: ${props => lighten(0.05, props.theme.brand)};
  }

  &:active {
    transition: none;
    background-color: ${props => lighten(0.1, props.theme.brand)};
    color: ${props => rgba(props.theme.text, 0.4)};
  }

  &:disabled {
    background-color: ${props => rgba(props.theme.brand, 0.4)};
    color: ${props => rgba(props.theme.text, 0.4)};
    cursor: default;
  }

  &:focus {
    outline: none;
  }
`;
