import { useState, useEffect } from 'react';
import { math } from 'polished';

interface Orientation {
  alpha?: number;
  beta?: number;
  gamma?: number;
}

type ScreenOrientationType = 'portrait' | 'landscape';

declare interface IWindow extends Window {
  DeviceOrientationEvent: boolean;
}
declare const window: IWindow;
export function useDeviceOrientation(): [
  Orientation | undefined,
  ScreenOrientationType
] {
  const isClient = typeof window === 'object';

  const [deviceOrientation, setDeviceOrientation] = useState<
    Orientation | undefined
  >({});
  const [screenOrientation, setScreenOrientation] = useState<
    ScreenOrientationType
  >(getOrientation());

  function handleDeviceOrientation(event) {
    setDeviceOrientation({
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
    });
  }
  function getOrientation(): ScreenOrientationType {
    return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
  }
  function handleResize() {
    setScreenOrientation(getOrientation());
  }

  useEffect(() => {
    if (!isClient) {
      return () => {};
    }
    if (process.env.NODE_ENV !== 'production') {
      setTimeout(() => {
        handleDeviceOrientation({ beta: 150, gamma: 75 });
      }, 1000);
    }
    if (window.DeviceOrientationEvent) {
      window.addEventListener(
        'deviceorientation',
        handleDeviceOrientation,
        true,
      );
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener(
          'deviceorientation',
          handleDeviceOrientation,
        );
        window.removeEventListener('resize', handleResize);
      };
    }
    setDeviceOrientation(undefined);
    return () => {};
  }, []);

  return [deviceOrientation, screenOrientation];
}
