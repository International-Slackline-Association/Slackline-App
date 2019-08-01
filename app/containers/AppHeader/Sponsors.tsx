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
  margin-bottom: 3rem;
  ${media.desktop`
    display: flex;
  `};
  & span {
    color: ${props => props.theme.textSecondary};
    font-size: 1rem;
    margin: 0.5rem 0rem;
  }
`;

export default memo(Sponsors);
