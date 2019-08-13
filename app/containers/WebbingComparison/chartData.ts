import { IChartData, IChartWebbing } from './interface';
import { rawData } from './data';
import { convertDolarToEuro } from './currencyConversion';

// Initial values for animation only
export function generateInitialChartData(): IChartData {
  const data = rawData();
  const webbings: IChartWebbing[] = [];
  for (const b of data.brands) {
    for (const w of b.webbings) {
      const webbing: IChartWebbing = {
        ...w,
        brandName: b.name,
      };
      webbing.stretch.forEach((s, index) => {
        s.kn = s.kn;
        s.percent = s.kn;
      });
      webbing.weight = 0;
      webbing.priceMeter.value = 0;
      webbings.push(webbing);
    }
  }
  webbings[webbings.length - 1].weight = 3;
  webbings[webbings.length - 1].priceMeter.value = 1;
  webbings[webbings.length - 1].breakingStrength = 6;

  return { webbings: webbings };
}
export async function generateChartData(): Promise<IChartData> {
  const data = rawData();
  const webbings: IChartWebbing[] = [];
  let forceDelay = true;
  for (const b of data.brands) {
    for (const w of b.webbings) {
      const webbing: IChartWebbing = {
        ...w,
        brandName: b.name,
      };
      if (webbing.priceMeter.currency === 'dolar') {
        webbing.priceMeter.currency = 'euro';
        webbing.priceMeter.value = await convertDolarToEuro(
          w.priceMeter.value,
          forceDelay,
        );
        forceDelay = false;
      }
      webbings.push(webbing);
    }
  }
  return { webbings: webbings };
}

function clone(data: IChartData): IChartData {
  const newData: IChartData = {
    webbings: data.webbings.map(w => {
      const webbing: IChartWebbing = {
        ...w,
        stretch: w.stretch.map(s => {
          return { ...s };
        }),
      };
      return webbing;
    }),
  };
  return newData;
}

// Reducer-like functions (useReducer was way more messy and not readable)
// tslint:disable: prefer-conditional-expression

export function selectAll(data: IChartData): IChartData {
  const d = clone(data);
  for (const w of d.webbings) {
    w.disabled = false;
  }
  return d;
}

export function selectOrDeselectWebbings(
  data: IChartData,
  webbings: IChartWebbing[],
  disableElse: boolean,
  disableDeselect = false,
): IChartData {
  const d = clone(data);
  let shouldDisableAll = false;
  if (webbings.length > 1) {
    shouldDisableAll = d.webbings
      .filter(w => webbings.find(w2 => w2.name === w.name))
      .some(w => w.disabled === false);
  }

  for (const w of d.webbings) {
    if (webbings.find(w2 => w2.name === w.name)) {
      if (disableDeselect) {
        w.disabled = false;
      } else if (shouldDisableAll) {
        w.disabled = true;
      } else {
        w.disabled = !w.disabled;
      }
    } else {
      w.disabled = disableElse ? true : w.disabled;
    }
  }
  return d;
}
