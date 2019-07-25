import React, { memo } from 'react';
import styled from '../../../styles/styled-components';
import media from '../../../styles/media';
import logo from './logo.svg';

interface Props {}

function Title() {
  return (
    <Wrapper>
      <Text href="/">Slackline Web Tools</Text>
      <ByWrapper>
        <Divider />
        <Span>by</Span>
        <Divider />
      </ByWrapper>
      <Logo href={'//www.slacklineinternational.org'} target="_blank">
        <Img src={logo} />
      </Logo>
    </Wrapper>
  );
}

const Img = styled.img`
  display: flex;
  flex: none;
  align-self: center;
  ${media.desktop`
    width: 20em;
  `};
`;

const Logo = styled.a`
  display: flex;
  flex: none;
  align-self: center;
`;

const Text = styled.a`
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  ${media.desktop`
    font-size: 1.5em;
  `};
`;

const Span = styled.span`
  font-size: 1em;
  font-weight: bold;
  margin: 0 1em;
`;

const Divider = styled.div`
  width: 2em;
  height: 1px;
  background-color: ${props => props.theme.text};
  ${media.desktop`
    height: 2px;
  `};
`;

const ByWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5em 0;
  ${media.desktop`
    margin: 1.5em 0;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 0em;
  ${media.desktop`
    margin-bottom: 2em;
    margin-top: 25%;
  `};
`;

export default memo(Title);
