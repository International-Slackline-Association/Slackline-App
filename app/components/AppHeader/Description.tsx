import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';

interface Props {}

function Description(props: Props) {
  return (
    <Wrapper>
      <Span>
        Collection of the tools and resources you need |
        <BoldSpan> access offline</BoldSpan>
      </Span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;
  margin: 2rem 0rem 1rem 0rem;

  ${media.desktop`
    display: flex;
  `};
`;

const Span = styled.span`
  font-size: 1.2rem;
  line-height: 2rem;
  text-align: left;
`;

const BoldSpan = styled.span`
  font-size: 1.2rem;
  text-align: left;
  font-weight: bold;
`;

export default memo(Description);
