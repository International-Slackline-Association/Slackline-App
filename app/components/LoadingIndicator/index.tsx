import React, { memo } from 'react';
import styled, { css, keyframes } from 'styles/styled-components';
import media from 'styles/media';

interface Props {
  className?: string;
}

function Component(props: Props) {
  return (
    <Spinner />
    // <Loading className={props.className}>
    //   <div />
    //   <div />
    //   <div />
    //   <div />
    // </Loading>
  );
}

export const LoadingIndicator = memo(Component);

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-left: 2px solid ${props => props.theme.brand};
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
const Loading = styled.div`
  display: flex;
  position: relative;
  /* width: 64px;
  height: 64px; */
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 80%;
    height: 80%;
    margin: 10%;
    border: 2 solid #fff;
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  iv:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
  }
`;
