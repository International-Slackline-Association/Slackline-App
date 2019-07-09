import React, { memo } from 'react';
import styled from '../../../styles/styled-components';
import media from '../../../styles/media';
import logo from './logo.svg';

interface Props {}

function Title() {
  return (
    <Wrapper>
      <Text>Slackline Web Tools</Text>
      <ByWrapper>
        <Divider />
        <Span>by</Span>
        <Divider />
      </ByWrapper>
      <Logo src={logo} />
    </Wrapper>
  );
}

const Logo = styled.img`
  display: flex;
  flex: none;
  align-self: center;
  ${media.desktop`
    width: 100%;
  `};
`;

const Text = styled.span`
  font-size: 1em;
  font-weight: bold;
  text-align: center;
`;

const Span = styled.span`
  font-size: 0.5em;
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
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 0em;
  ${media.desktop`
    margin-bottom: 2em;
  `};
`;

export default memo(Title);
