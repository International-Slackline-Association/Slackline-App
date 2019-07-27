import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import Title from './Title';
import Description from './Description';
import isaLogo from './logo.svg';
import Sponsors from './Sponsors';

interface Props {}

function AppHeader(props: Props) {
  return (
    <Wrapper>
      <InnerWrapper>
        {/* <Logo src={toolsIcon} /> */}
        <Title />
        <Description />
        <Logo href={'//www.slacklineinternational.org'} target="_blank">
          <img style={{ width: '100%' }} src={isaLogo} />
        </Logo>
        <Sponsors />
      </InnerWrapper>
      <ClippedZone />
    </Wrapper>
  );
}

const Logo = styled.a`
  display: none;
  align-self: flex-start;
  width: 66%;
  ${media.desktop`
    display: flex;
  `};
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1em;
  flex-grow: 1;
  ${media.desktop`
    padding: 2em 0em 2em 4em;
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
    width: 33%;
    min-width: 400px;
    height: 100vh;
    background: ${props =>
      `linear-gradient(90deg, ${props.theme.brandSecondary} 0%, ${
        props.theme.background
      } 100%)`};
    clip-path: polygon(0 0, 84% 0, 100% 33%, 84% 100%, 0 100%);
  `};
`;

export default memo(AppHeader);
