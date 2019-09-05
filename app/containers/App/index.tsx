import React, { Suspense, lazy, memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from '../../styles/global-styles';

const HomePage = lazy(() => import('../HomePage'));

const InstructorCertificateExplorer = lazy(() =>
  import('../InstructorCertificateExplorer'),
);
const RiggerCertificateExplorer = lazy(() =>
  import('../RiggerCertificateExplorer'),
);
const UnitConverter = lazy(() => import('../UnitConverter'));
const TensionCalculator = lazy(() => import('../TensionCalculator'));
const WebbingCharts = lazy(() => import('../WebbingCharts'));
const Rigrite = lazy(() =>
  import('../Rigrite'),
);
const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path={'/Rigrite'} component={Rigrite} />

        <Route path={'/unit-converter'} component={UnitConverter} />
        <Route path={'/traditional-tension-calculator'} component={TensionCalculator} />
        <Route path={'/webbing-charts'} component={WebbingCharts} />
        <Route
          path={'/instructor-certificate-explorer'}
          component={InstructorCertificateExplorer}
        />
        <Route
          path={'/rigger-certificate-explorer'}
          component={RiggerCertificateExplorer}
        />
        <Route path={['/', '/isa']} component={HomePage} />
      </Switch>
      <GlobalStyles />
    </Suspense>
  );
};

export default memo(App);
