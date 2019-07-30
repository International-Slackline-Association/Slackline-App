import React, { Suspense, lazy, memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from '../../styles/global-styles';

const HomePage = lazy(() => import('../HomePage'));

const InstructorCertificateExplorer = lazy(() =>
  import('../InstructorCertificateExplorer'),
);

const TensionCalculator = lazy(() =>
  import('../TensionCalculator'),
);

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path={'/isa'} component={HomePage} />
        <Route
          path={'/instructor-certificate-explorer'}
          component={InstructorCertificateExplorer}
        />
        <Route
          path={'/tension-calculator'}
          component={TensionCalculator}
        />
        <Route path={'/'} component={HomePage} />
      </Switch>
      <GlobalStyles />
    </Suspense>
  );
};

export default memo(App);
