import { useState, useEffect } from 'react';
import { isSafari } from 'react-device-detect';

import { AppAnalytics } from 'aws/analytics';
import { useDeviceOrientation } from './useDeviceOrientation';
import { Utils } from 'utils/index';

export function useCheckDeviceOrientation() {
  const [orientation] = useDeviceOrientation();
  const [showAlert, setShowAlert] = useState(false);

  if (showAlert && orientation === undefined) {
    if (!Utils.isRequestPermissionAvailable()) {
      let alertText = `Cannot access device's motion sensors.`;
      if (isSafari) {
        alertText += `You can enable this at Settings > Safari > Privacy & Security`;
      }
      if (process.env.NODE_ENV === 'production') {
        alert(alertText);
      }
    }
    setShowAlert(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(true);
    }, 1000);
  }, []);

  return orientation !== undefined;
}
