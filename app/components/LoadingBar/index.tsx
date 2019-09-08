import React, { memo } from 'react';
import styled, { keyframes } from 'styles/styled-components';
import media from 'styles/media';
import { progressBarCss, animateCss } from './styles';

interface Props {
  className?: string;
  percent: number;
}

function Component(props: Props) {
  return (
      <Bar className={props.className}>
        <div style={{ width: `${props.percent}%` }} />
      </Bar>
  );
}

const Bar = styled.div`
  display: flex;
  border-radius: 1rem;
  border: 1px solid ${props => props.theme.text};
  & div {
    height: 100%;
    border-radius: 1rem;
    background-color: ${props => props.theme.brand};
  }
`;

export const ProgressBar = memo(Component);
