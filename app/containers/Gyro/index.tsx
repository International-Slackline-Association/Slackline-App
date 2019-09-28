import React, { useState } from 'react';
import styled from 'styles/styled-components';
import { TextInput } from 'components/TextInput';
import { useDeviceOrientation } from 'utils/hooks/useDeviceOrientation';

export default function Gyro() {
  const [orientation, screenOrientation] = useDeviceOrientation();

  return (
    <div>
      {!orientation ? (
        <p>Gyro isnt working</p>
      ) : (
        <React.Fragment>
          <p>-</p>
          <p>
            Absolute:
            {orientation && orientation.absolute && orientation.absolute}
          </p>
          <p>
            Alpha:
            {orientation && orientation.alpha && orientation.alpha.toFixed(0)}
          </p>
          <p>
            Beta:
            {orientation && orientation.beta && orientation.beta.toFixed(0)}
          </p>
          <p>
            Gamma:
            {orientation && orientation.gamma && orientation.gamma.toFixed(0)}
          </p>
          <p>orientation: {screenOrientation}</p>
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
