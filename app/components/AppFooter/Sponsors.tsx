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
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  & span {
    color: ${props => props.theme.textSecondary};
    font-size: 1rem;
    margin: 0.5rem 0rem;
  }
`;

export default memo(Sponsors);
