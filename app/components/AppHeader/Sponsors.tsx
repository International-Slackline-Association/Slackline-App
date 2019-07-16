import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';

interface Props {}

function Sponsors(props: Props) {
  return (
    <Wrapper>
      <span>
        Supported / Sponsored by
      </span>
      <span>
        [Logos...]
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;
  justify-content: center;
  flex-direction: column;
  ${media.desktop`
    display: flex;
  `};
  & span {

    font-size: 1em;
    margin: 1em 0em;
    /* font-weight: bold; */
    font-style: italic;
    text-align: center;
  }
`;

export default memo(Sponsors);
