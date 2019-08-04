import React, { Suspense, lazy, memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from '../../styles/global-styles';

const HomePage = lazy(() => import('../HomePage'));

const InstructorCertificateExplorer = lazy(() =>
  import('../InstructorCertificateExplorer'),
);
const UnitConverter = lazy(() => import('../UnitConverter'));
const TensionCalculator = lazy(() => import('../TensionCalculator'));
const WebbingComparison = lazy(() => import('../WebbingComparison'));

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path={'/unit-converter'} component={UnitConverter} />
        <Route
          path={'/tension-calculator'}
          component={TensionCalculator}
        />
        <Route path={'/webbing-comparison'} component={WebbingComparison} />
        <Route
          path={'/instructor-certificate-explorer'}
          component={InstructorCertificateExplorer}
        />
        <Route path={['/', '/isa']} component={HomePage} />
      </Switch>
      <GlobalStyles />
    </Suspense>
  );
};

export default memo(App);
