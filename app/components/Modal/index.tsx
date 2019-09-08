import React from 'react';
import { createPortal } from 'react-dom';
import usePortal from './usePortal';
import styled from 'styles/styled-components';
import { cover } from 'polished';

interface Props {
  id?: string;
  isTransparentBackground?: boolean;
  children: React.ReactNode;
}
const Portal = (props: Props) => {
  const target = usePortal(props.id || 'app');
  let render = props.children;
  if (props.isTransparentBackground) {
    render = <Background>{props.children}</Background>;
  }
  return createPortal(render, target);
};

const Background = styled.div`
  ${cover()}
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.overlay};
`;

export default Portal;
