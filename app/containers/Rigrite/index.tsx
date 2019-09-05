import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import { selectDefault } from './selectors';
import { useDeviceOrientation } from './useDeviceOrientation';
import { convertMass } from 'components/Converter/Mass/formula';
import styled from 'styles/styled-components';
import { TextInput } from 'components/TextInput';
import Drawing from './drawing.svg';

const key = 'test';

const selector = createStructuredSelector({
  dflt: selectDefault(),
});
let measuredValues: number[] = [];

export default function Rigrite() {
  const [weight, setWeight] = useState(50);
  const [weightString, setWeightString] = useState(weight.toString());
  // const [measureValues, setMeasureValues] = useState<number[]>([]);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const orientation = useDeviceOrientation();
  let beta: number | undefined;

  beta =
    orientation && orientation.beta && parseFloat(orientation.beta.toFixed(2));

  let angle;
  let tension;
  const averageTension =
    measuredValues.reduce((a, b) => a + b, 0) / measuredValues.length;
  if (beta) {
    angle = beta < 90 ? beta : 180 - beta;
    tension = ((weight * 9.81) / 2) * (1 / Math.sin(toRadians(angle)));
    tension = parseFloat((tension / 1000).toFixed(3));
  }
  function toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  function updateWeightValue(value: string, switchValue?: boolean) {
    let v = parseInt(value, 10);
    if (v <= 0) {
      v = 1;
    }
    setWeightString(v.toString());
    if (switchValue) {
      v = convertMass(undefined, v)!.kg;
    }
    setWeight(v);
  }
  function isGammaValid() {
    return (
      orientation &&
      orientation.gamma &&
      (orientation.gamma < 0.3 && orientation.gamma > -0.3)
    );
  }

  if (
    orientation &&
    orientation.beta &&
    isMeasuring &&
    isGammaValid() &&
    measuredValues.length < 10
  ) {
    measuredValues.push(tension);
  }
  if (measuredValues.length >= 10 && isMeasuring) {
    setIsMeasuring(false);
  }

  function startMeasuring() {
    measuredValues = [];
    setIsMeasuring(true);
  }
  return (
    <div>
      <Input
        switchValues={['kilogram', 'pounds']}
        type="number"
        label="Weight"
        onChange={updateWeightValue}
        value={weightString}
      />
      {!orientation ? (
        <p>Gyro isnt working</p>
      ) : (
        <React.Fragment>
          <p>Angle: {angle && angle.toFixed(2)}</p>
          <p>-</p>
          <p>Beta: {beta}</p>
          <p>Alpha: {orientation && orientation.alpha}</p>
          <p>Gamma: {orientation && orientation.gamma}</p>
          <p>-</p>
          <p>Measured Values: {measuredValues.join(', ')}</p>
          <p>Tension: {tension && tension.toFixed(2)} kn</p>
          <p>
            Average Tension: {averageTension && averageTension.toFixed(2)} kn
          </p>

          {!isMeasuring && (
            // tslint:disable-next-line: jsx-no-lambda
            <button onClick={startMeasuring}>Start Measuring</button>
          )}
          {/* <div>
            <Circle />
            <Img src={Drawing} />
          </div> */}
        </React.Fragment>
      )}
    </div>
  );
}

const Circle = styled.div`
  background: #f00;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Img = styled.img`
  transform: perspective(300px) rotateY(-10deg);
`;

const Input = styled(TextInput)`
  margin: 1rem 0rem;
  width: 16rem;
`;
