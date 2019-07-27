import React, { memo, ReactNode } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';
import AppHeader from 'components/AppHeader';
import backgroundSvg from './background.svg?file';
import { cover } from 'polished';
import { BackgroundPattern } from './BackgroundPattern';
import AppFooter from 'components/AppFooter';

interface Props {
  children?: ReactNode;
  hideFooter?: boolean;
}

function AppBackgroundContainer(props: Props) {
  return (
    <React.Fragment>
      <BackgroundImage />
      <Wrapper>
        <AppHeader />
        <ContentSection>{props.children}</ContentSection>
        {!props.hideFooter && <AppFooter />}
      </Wrapper>
    </React.Fragment>
  );
}

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  flex: 1;
  overflow-y: scroll;
  ${media.desktop`
    align-items: flex-start;
    padding: 2rem 2rem 0rem 3em;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.desktop`
    flex-direction: row;
    max-height: 100vh;
    /* overflow: hidden; */
  `}
`;

const BackgroundImage = styled(BackgroundPattern)`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  ${media.desktop`
    width: auto;
  `}
`;
export default memo(AppBackgroundContainer);
