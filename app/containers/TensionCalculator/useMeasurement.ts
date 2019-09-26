import { useState, useEffect } from 'react';
import { math } from 'polished';
import { useDeviceOrientation } from 'utils/hooks/useDeviceOrientation';

interface Orientation {
  alpha?: number;
  beta?: number;
  gamma?: number;
}

function toRadians(angle: number) {
  return angle * (Math.PI / 180);
}

export function useMeasurement(weight: number) {
  const [orientation] = useDeviceOrientation();

  let beta: number | undefined;
  let tilt: number | undefined;

  const gamma = orientation && orientation.gamma;

  beta =
    orientation && orientation.beta && parseFloat(orientation.beta.toFixed(2));
  let angle = 0;
  let tension = 0;

  if (beta) {
    angle = beta < 90 ? beta : 180 - beta;
    tension = ((weight * 9.81) / 2) * (1 / Math.sin(toRadians(angle)));
    tension = parseFloat((tension / 1000).toFixed(3));
  }
  if (gamma) {
    tilt = parseFloat(gamma.toFixed(2));
  }

  return {failed: orientation === undefined, angle, tension, tilt };
}
