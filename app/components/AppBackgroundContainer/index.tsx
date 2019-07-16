import React, { memo, ReactNode } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import AppHeader from 'components/AppHeader';

interface Props {
  children?: ReactNode;
}

function AppBackgroundContainer(props: Props) {
  return (
    <Wrapper>
      <AppHeader />
      <ContentSection>{props.children}</ContentSection>
    </Wrapper>
  );
}

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  align-items: center;
  flex: 1;
  ${media.desktop`
    padding: 2em 2em 0em 3em;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.desktop`
    flex-direction: row-reverse;
  `}
`;

export default memo(AppBackgroundContainer);
