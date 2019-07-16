import React, { Suspense, lazy, memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from '../../styles/global-styles';
import styled from '../../styles/styled-components';
import media from '../../styles/media';
import AppHeader from '../../components/AppHeader';

const HomePage = lazy(() => import('../HomePage'));
const InstructorCertificateExplorer = lazy(() =>
  import('../InstructorCertificateExplorer'),
);

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
        <Switch>
          <Route path={'/'} component={HomePage} />
          <Route
            path={'/instructor-certificate-explorer'}
            component={InstructorCertificateExplorer}
          />
        </Switch>
      <GlobalStyles />
    </Suspense>
  );
};

export default memo(App);
