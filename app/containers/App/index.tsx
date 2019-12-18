import React, { Suspense, lazy, memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import GlobalStyles from '../../styles/global-styles';

const HomePage = lazy(() => import('../HomePage'));
const IsaHomePage = lazy(() => import('../ISA/IsaHomePage'));
const InstructorCertificateExplorer = lazy(() =>
  import('../ISA/InstructorCertificateExplorer'),
);
const RiggerCertificateExplorer = lazy(() =>
  import('../ISA/RiggerCertificateExplorer'),
);
const UnitConverter = lazy(() => import('../UnitConverter/Loadable'));
const TraditionalTensionCalculator = lazy(() =>
  import('../TraditionalTensionCalculator'),
);
const SpiritLevel = lazy(() => import('../SpiritLevel/Loadable'));
const Gyro = lazy(() => import('../Gyro'));
const LengthMeasurer = lazy(() => import('../LengthMeasurer/Loadable'));

const WebbingCharts = lazy(() => import('../WebbingCharts/Loadable'));
const TensionCalculator = lazy(() => import('../TensionCalculator/Loadable'));
const DistanceMeasurer = lazy(() => import('../DistanceMeasurer/Loadable'));

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path={'/tension-calculator'} component={TensionCalculator} />
        <Route
          path={'/traditional-tension-calculator'}
          component={TraditionalTensionCalculator}
        />
        <Route path={'/spirit-level'} component={SpiritLevel} />
        <Route path={'/length-measurer'} component={LengthMeasurer} />

        {/* <Route path={'/webbing-charts'} component={WebbingCharts} /> */}
        <Route path={'/unit-converter'} component={UnitConverter} />
        <Route path={'/distance-measurer'} component={DistanceMeasurer} />

        <Route path={'/gyro'} component={Gyro} />

        <Route exact path={'/isa'} component={IsaHomePage} />
        <Route
          path={'/isa/instructor-certificate-explorer'}
          component={InstructorCertificateExplorer}
        />
        <Route
          path={'/isa/rigger-certificate-explorer'}
          component={RiggerCertificateExplorer}
        />
        <Route path={'/'} component={HomePage} />
      </Switch>
      <GlobalStyles />
    </Suspense>
  );
};

export default memo(App);
