import { useState, useEffect } from 'react';
import { math } from 'polished';

interface Orientation {
  alpha?: number;
  beta?: number;
  gamma?: number;
}
declare interface IWindow extends Window {
  DeviceOrientationEvent: boolean;
}
declare const window: IWindow;
export function useDeviceOrientation() {
  const [deviceOrientation, setDeviceOrientation] = useState<Orientation | undefined>({});

  function handleDeviceOrientation(event) {
    setDeviceOrientation({
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
    });
  }

  useEffect(() => {
    if (window.DeviceOrientationEvent) {
      window.addEventListener(
        'deviceorientation',
        handleDeviceOrientation,
        true,
      );
      return () => {
        window.removeEventListener(
          'deviceorientation',
          handleDeviceOrientation,
        );
      };
    }
    setDeviceOrientation(undefined);
    return () => {};
  }, []);

  return deviceOrientation;
}
