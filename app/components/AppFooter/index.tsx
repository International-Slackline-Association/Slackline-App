import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import Sponsors from './Sponsors';

interface Props {}

function AppFooter(props: Props) {
  return (
    <Wrapper>
      <ClippedZone />
      <InnerWrapper>
        <Sponsors />
      </InnerWrapper>
    </Wrapper>
  );
}

const InnerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0.5rem;
  flex-grow: 1;
`;
const ClippedZone = styled.div`
  display: flex;
  flex: 0 0 16%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 135px;
  flex: 0 0 auto;
  justify-content: flex-end;
  clip-path: polygon(0 16%, 33% 0, 100% 16%, 100% 100%, 0 100%);
  background: ${props =>
    `linear-gradient(180deg, ${props.theme.background} 0%, ${
      props.theme.brandSecondary
    } 100%)`};
  ${media.desktop`
    display: none;
  `};
`;

export default memo(AppFooter);
