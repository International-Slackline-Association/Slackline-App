import React, { Suspense, lazy, memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from '../../styles/global-styles';
import styled from '../../styles/styled-components';
import media from '../../styles/media';
import AppHeader from '../../components/AppHeader';

const HomePage = lazy(() => import('../HomePage'));

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Wrapper>
        <AppHeader />
        <Switch>
          <Route path={'/'} component={HomePage} />
        </Switch>
      </Wrapper>
      <GlobalStyles />
    </Suspense>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.desktop`
    flex-direction: row-reverse;
  `}
`;

export default memo(App);
