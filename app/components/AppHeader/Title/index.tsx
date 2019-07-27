import React, { memo } from 'react';
import styled from '../../../styles/styled-components';
import media from '../../../styles/media';

interface Props {}

function Title() {
  return (
    <Wrapper>
      <Text href="/">
        Slackline <br />
        Web Tools
      </Text>
    </Wrapper>
  );
}

const Text = styled.a`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  ${media.desktop`
    font-size: 3em;
    text-align: left;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0em;
  ${media.desktop`
    justify-content: flex-start;
    margin-bottom: 2em;
    margin-top: 5em;
  `};
`;

export default memo(Title);
