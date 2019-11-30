import React from 'react';
import { createPortal } from 'react-dom';
import usePortal from './usePortal';
import styled from 'styles/styled-components';
import { cover } from 'polished';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

interface Props {
  id?: string;
  isTransparentBackground?: boolean;
  allowEvents?: boolean;
  z?: number;
  backgroundClicked?: () => void;
  children: React.ReactNode;
}
const Portal = (props: Props) => {
  const target = usePortal(props.id || 'app');
  let render = props.children;
  if (props.isTransparentBackground) {
    render = (
      <Background onClick={toggle} allowEvents={props.allowEvents} z={props.z}>
        {props.children}
      </Background>
    );
  }

  function toggle(e: any) {
    if (props.backgroundClicked) {
      props.backgroundClicked();
    }
  }
  return createPortal(render, target);
};

const Background = styled.div<Props>`
  ${cover()}
  pointer-events: ${props => (props.allowEvents ? 'none' : 'unset')};
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.overlay};
  z-index: ${props => (props.z ? props.z : 'unset')};
`;

export default Portal;
