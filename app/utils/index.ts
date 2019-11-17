// tslint:disable-next-line: no-namespace
export namespace Utils {
  export function getUrlQueryVariable(queryString: string, variable: string) {
    const query = queryString.substring(1);
    const vars = query.split('&');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) === variable) {
        return decodeURIComponent(pair[1]);
      }
    }
    // console.log('Query variable %s not found', variable);
    return '';
  }
  export function isNil(...value: any) {
    return value.every((e: any) => is_value_nil(e));
  }

  export function isSomeNil(...value: any) {
    return value.some((e: any) => is_value_nil(e));
  }

  function is_value_nil(v: any) {
    return v === null || v === undefined;
  }

  export function projectValue(
    value: number,
    valueRange: number,
    convertIntoRange: number,
  ) {
    return (value * convertIntoRange) / valueRange;
  }

  export function degreesToRadians(angle: number) {
    return angle * (Math.PI / 180);
  }

  export function trimToDecimals(value: number, decimals: number) {
    return parseFloat(value.toFixed(decimals));
  }

  export function angleDiff(a1: number, a2: number) {
    const phi = Math.abs(a1 - a2) % 360; // This is either the distance or 360 - distance
    const distance = phi > 180 ? 360 - phi : phi;
    return distance;
  }

  export function isRequestPermissionAvailable() {
    return (
      typeof (window.DeviceOrientationEvent as any)?.requestPermission ===
      'function'
    );
  }

  export function requestMotionEventPermission() {
    if (
      typeof (window.DeviceOrientationEvent as any)?.requestPermission ===
      'function'
    ) {
      return requestPermission();
    }
    return Promise.resolve(undefined);
  }

  async function requestPermission() {
    return (window.DeviceOrientationEvent as any)
      .requestPermission()
      .then((permissionState: string) => {
        if (permissionState === 'granted') {
          return true;
        }
        return false;
      })
      .catch(err => {
        console.error(err);
        return false;
      });
  }
}
