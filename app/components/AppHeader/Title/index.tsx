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
  height: 33%;
  width: 100%;
`;

const Text = styled.span`
  font-weight: bold;
  text-align: center;
`;

const Span = styled.span`
  font-size: 0.5rem;
  margin: 0 0.5rem;
`;

const Divider = styled.div`
  width: 2rem;
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
  margin: 0.5rem 0;
  ${media.desktop`
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 66%;
  ${media.desktop`
    flex-basis: 50%;
  `};
`;

export default memo(Title);
