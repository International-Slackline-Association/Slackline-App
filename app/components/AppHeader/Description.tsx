import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';

interface Props {}

function Description(props: Props) {
  return (
    <Wrapper>
      <Span>
        Collection of tools and resources you need |
        <BoldSpan> access offline</BoldSpan>
      </Span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;
  margin: 2em 0em 1em 0em;

  ${media.desktop`
    display: flex;
  `};
`;

const Span = styled.span`
  font-size: 1.2em;
  line-height: 2em;
  text-align: left;
`;

const BoldSpan = styled.span`
  font-size: 1.2em;
  text-align: left;
  font-weight: bold;
`;

export default memo(Description);
