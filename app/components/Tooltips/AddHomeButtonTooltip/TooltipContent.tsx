import React, { memo } from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import CancelIcon from 'components/svg/cancel.svg';
import Image from './AddHomeScreenIllustration.png';
import {
  touchableOpacity,
  elevatedShadow,
  flexCoverCenter,
} from 'styles/mixins';

interface Props {
  onClose: () => void;
}

export function TooltipContent(props: Props) {
  function click(e) {
    e.stopPropagation();
  }
  return (
    <CSSTransition
      transitionName="popup"
      transitionEnter={false}
      transitionLeave={false}
      transitionAppear={true}
      transitionAppearTimeout={100}
    >
      <Wrapper onClick={click}>
        <CloseButton onClick={props.onClose} />
        <Text>Add to Home Screen</Text>
        <SubText>
          Add this application to your phone as shown below to be able to use it
          offline
        </SubText>
        <Img />
        <SubTextSmall>
         * Due to the iOS limitation, iPhone's camera DOES NOT work in home screen apps. Use Safari in this case.
        </SubTextSmall>
      </Wrapper>
    </CSSTransition>
  );
}

const CSSTransition = styled(ReactCSSTransitionGroup)`
  ${flexCoverCenter}
`;

const Text = styled.span`
  font-size: 1.2rem;
`;

const SubText = styled.span`
  font-size: 1rem;
  margin-top: 2rem;
  text-align: center;
`;

const SubTextSmall = styled.span`
  font-size: 0.8rem;
  font-style: italic;
  margin-top: 2rem;
  text-align: center;
`;

const Img = styled.img.attrs({
  src: Image,
})`
  /* display: flex; */
  /* height: 50%; */
  width: 80%;
  margin-top: 2rem;
`;

const CloseButton = styled.img.attrs({ src: CancelIcon })`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 1.2rem;
  ${touchableOpacity}
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.background};
  border-radius: 3rem;
  padding: 2rem;
  /* height: 50%; */
  width: 80%;
  ${elevatedShadow};
  ${media.desktop`
    width: 50%;
    height: auto;
  `};

  transition: transform 100ms ease-in-out;

  &.popup-appear {
    transform: scale(0);
  }
`;
// export const TooltipContent = memo(Component);
