import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import Title from './Title';
import Description from './Description';
import toolsIcon from './tools_icon.svg';
import Sponsors from './Sponsors';

interface Props {}

function AppHeader(props: Props) {
  return (
    <Wrapper>
      <InnerWrapper>
        {/* <Logo src={toolsIcon} /> */}
        <Title />
        <Description />
        <Sponsors />
      </InnerWrapper>
      <ClippedZone />
    </Wrapper>
  );
}

const Logo = styled.img`
  display: none;
  flex: none;
  height: auto;
  width: 3em;
  justify-content: center;
  align-self: center;
  margin: 1em 0;
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
    padding: 2em 2em 2em 0;
  `};
`;
const ClippedZone = styled.div`
  display: flex;
  flex: 0 0 16%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.brandSecondary};
  width: 100%;
  height: 135px;
  justify-content: flex-end;
  clip-path: polygon(0 0, 100% 0, 100% 84%, 66% 100%, 0 84%);
  ${media.desktop`
    flex-direction: row-reverse;
    width: 30%;
    min-width: 400px;
    height: 100vh;
    clip-path: polygon(16% 0, 100% 0, 100% 100%, 16% 100%, 0 33%);
  `};
`;

export default memo(AppHeader);
