import { IChartData, IChartWebbing, IChartBrand } from './interface';
import { data as rawData, IWebbing } from './data';
import { convertDolarToEuro } from './currencyConversion';
import { Utils } from 'utils/index';

export function generateDefaultChartData(): IChartData {
  const data = clone(rawData);
  for (const b of data.brands) {
    for (const w of b.webbings) {
      w.stretch.forEach((s, index) => {
        s.kn = s.kn;
        s.percent = s.kn;
      });
    }
  }
  return data;
}
export async function generateChartData(): Promise<IChartData> {
  for (const b of rawData.brands) {
    for (const w of b.webbings) {
      if (w.priceMeter.currency === 'dolar') {
        w.priceMeter.currency = 'euro';
        w.priceMeter.value = await convertDolarToEuro(w.priceMeter.value);
      }
    }
  }
  return rawData;
}

function clone(data: IChartData): IChartData {
  const newData: IChartData = {
    brands: data.brands.map(b => {
      const brand: IChartBrand = {
        ...b,
        webbings: b.webbings.map(w => {
          const webbing: IChartWebbing = {
            ...w,
            stretch: w.stretch.map(s => {
              return { ...s };
            }),
          };
          return webbing;
        }),
      };
      return brand;
    }),
  };
  return newData;
}

export function isAWebbingSelected(d: IChartData) {
  for (const b of d.brands) {
    for (const w of b.webbings) {
      if (!Utils.isNil(w.disabled) && w.disabled === false) {
        return true;
      }
    }
  }
  return false;
}


export function findWebbingAtIndex(index: number) {
  // for (const b of d.brands) {
  //   for (const w of b.webbings) {
  //     if (!Utils.isNil(w.disabled) && w.disabled === false) {
  //       return true;
  //     }
  //   }
  // }
  // return false;
}



// Reducer-like functions (useReducer was way more messy and not readable)
// tslint:disable: prefer-conditional-expression

export function deselectAll(data: IChartData): IChartData {
  const d = clone(data);
  for (const b of d.brands) {
    b.disabled = false;
    for (const w of b.webbings) {
      w.disabled = false;
    }
  }
  return d;
}

export function selectDeselectWebbing(
  data: IChartData,
  webbing: IChartWebbing,
  disableElse: boolean,
  disableDeselect = false,
): IChartData {
  const d = clone(data);
  for (const b of d.brands) {
    let disableBrand = false;
    for (const w of b.webbings) {
      if (w.name === webbing.name) {
        w.disabled = disableDeselect ? false : !w.disabled;
      } else {
        w.disabled = disableElse ? true : w.disabled;
      }
      disableBrand = disableBrand || w.disabled === false;
    }
    b.disabled = !disableBrand;
  }
  return d;
}

export function selectDeselectBrand(
  data: IChartData,
  brand: IChartBrand,
  disableElse: boolean,
  disableDeselect = false,
): IChartData {
  const d = clone(data);
  for (const b of d.brands) {
    if (brand.name === b.name) {
      b.disabled = disableDeselect ? false : !b.disabled;
    } else {
      b.disabled = disableElse ? true : b.disabled;
    }
    for (const w of b.webbings) {
      if (brand.name === b.name) {
        w.disabled = disableDeselect ? false : b.disabled;
      } else {
        w.disabled = disableElse ? true : w.disabled;
      }
    }
  }
  return d;
}
