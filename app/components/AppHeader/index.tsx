import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import Title from './Title';

interface Props {}

function AppHeader(props: Props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <Title />
      </InnerWrapper>
      <ClippedZone />
    </Wrapper>
  );
}

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ClippedZone = styled.div`
  display: flex;
  flex-basis: 16%;
`;

const desktop = css`
  flex-direction: row-reverse;
  width: 66vh;
  height: 100vh;
  clip-path: polygon(16% 0, 100% 0, 100% 100%, 16% 100%, 0 33%);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.brandSecondary};
  width: 100%;
  height: 135px;
  justify-content: flex-end;
  clip-path: polygon(0 0, 100% 0, 100% 84%, 66% 100%, 0 84%);
  ${media.desktop`
    ${desktop}
  `};
`;

export default memo(AppHeader);
