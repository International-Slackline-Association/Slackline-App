import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';

interface Props {}

function Sponsors(props: Props) {
  return (
    <Wrapper>
      <span>
        Supported by
      </span>
      <span>
        [Logos...]
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;
  align-self: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 3em;
  ${media.desktop`
    display: flex;
  `};
  & span {
    color: ${props => props.theme.textSecondary};
    font-size: 1em;
    margin: 0.5em 0em;
  }
`;

export default memo(Sponsors);
