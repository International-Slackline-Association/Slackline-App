import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import Title from './Title';
import Description from './Description';
import BackButtonSVG from './backButton.svg';
import Sponsors from './Sponsors';
import { touchableOpacity } from 'styles/mixins';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';

interface Props {
  showBackButton?: boolean;
}

function AppHeader(props: Props) {
  const dispatch = useDispatch();

  function onBackButtonClick() {
    dispatch(goBack());
  }
  return (
    <Wrapper>
      <InnerWrapper>
        {props.showBackButton && <BackButton src={BackButtonSVG} onClick={onBackButtonClick}/>}
        <Title />
        <Description />
        <Sponsors />
      </InnerWrapper>
      <ClippedZone />
    </Wrapper>
  );
}

const BackButton = styled.img`
  ${touchableOpacity}
  display: none;
  position: absolute;
  top: 40%;
  left: 1rem;
  width: 2rem;
  ${media.pwaInstalled`
    display: flex;
  `};
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  ${media.desktop`
    padding: 2rem 0rem 2rem 4rem;
  `};
`;
const ClippedZone = styled.div`
  display: flex;
  flex: 0 0 16%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 135px;
  flex: 0 0 auto;
  justify-content: flex-end;
  clip-path: polygon(0 0, 100% 0, 100% 84%, 66% 100%, 0 84%);
  background: ${props =>
    `linear-gradient(180deg, ${props.theme.brandSecondary} 0%, ${
      props.theme.background
    } 100%)`};
  ${media.desktop`
    flex-direction: row;
    /* width: 25%; */
    width: 24rem;
    height: 100vh;
    background: ${props =>
      `linear-gradient(90deg, ${props.theme.brandSecondary} 0%, ${
        props.theme.background
      } 100%)`};
    clip-path: polygon(0 0, 84% 0, 100% 33%, 84% 100%, 0 100%);
  `};
`;

export default memo(AppHeader);
