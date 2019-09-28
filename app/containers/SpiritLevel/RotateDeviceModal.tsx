import React, { memo } from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import { cover } from 'polished';
import { elevatedShadow, flexCoverCenter } from 'styles/mixins';
import IllustrationIcon from './rotate_device.svg';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

interface Props {}

function Component(props: Props) {
  return (
    <CSSTransition
      transitionName="popup"
      transitionEnter={false}
      transitionLeave={false}
      transitionAppear={true}
      transitionAppearTimeout={100}
    >
      <Wrapper>
        <Text>ROTATE LEFT</Text>
        <Illustration />
      </Wrapper>
    </CSSTransition>
  );
}

export const RotateDeviceModal = memo(Component);

const Text = styled.span`
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
`;

const Illustration = styled.img.attrs({
  src: IllustrationIcon,
})`
  height: 100%;
`;

const CSSTransition = styled(ReactCSSTransitionGroup)`
  ${flexCoverCenter}
`;

const Wrapper = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25%;
  padding: 1rem;

  transition: transform 100ms ease-in-out;

  &.popup-appear {
    transform: scale(0.1);
  }
`;
