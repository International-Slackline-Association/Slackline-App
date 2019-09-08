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
  const [deviceOrientation, setDeviceOrientation] = useState<
    Orientation | undefined
  >({});

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
      // setTimeout(() => {
      //   handleDeviceOrientation({ beta: 10, gamma: 60 });
      // }, 500);
      // setTimeout(() => {
      //   handleDeviceOrientation({ beta: 10, gamma: -40 });
      // }, 1000);
      // setTimeout(() => {
      //   handleDeviceOrientation({ beta: 10, gamma: 20});
      // }, 2000);
      // setTimeout(() => {
      //   handleDeviceOrientation({ beta: 10, gamma: 1});
      // }, 2500);
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
