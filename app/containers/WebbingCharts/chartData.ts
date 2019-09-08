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
        selected: true,
        hovered: false,
      };
      webbing.stretch.forEach((s, index) => {
        s.kn = s.kn;
        s.percent = s.kn;
      });
      webbing.stretch.splice(0, 0, { kn: 0, percent: 0 });
      // webbing.weight = 0;
      // webbing.priceMeter.value = 0;
      webbings.push(webbing);
    }
  }

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
        selected: true,
        hovered: false,
      };
      webbing.stretch.splice(0, 0, { kn: 0, percent: 0 });
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

// Reducer-like functions (useReducer was way messier and not readable)
// tslint:disable: prefer-conditional-expression
// tslint:disable-next-line: no-namespace
export namespace  ChartManager {
  export function findWebbingAtIndex(
    data: IChartData,
    index: number,
  ): IChartWebbing {
    return data.webbings[index];
  }
  export function findWebbingWithName(
    data: IChartData,
    name: string,
  ): IChartWebbing {
    return data.webbings.find(w => w.name === name)!;
  }

  export function selectAll(data: IChartData): IChartData {
    const d = clone(data);
    for (const w of d.webbings) {
      w.selected = true;
      w.hovered = false;
      w.crosshairPointIndex = undefined;
      w.focused = false;
    }
    return d;
  }

  export function clearHovers(data: IChartData): IChartData {
    const d = clone(data);
    for (const w of d.webbings) {
      w.hovered = false;
      w.crosshairPointIndex = undefined;
      w.focused = false;
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
    let shouldDeselectAll = false;
    if (webbings.length > 1) {
      shouldDeselectAll = d.webbings
        .filter(w => webbings.find(w2 => w2.name === w.name))
        .some(w => w.selected === true);
    }

    for (const w of d.webbings) {
      if (webbings.find(w2 => w2.name === w.name)) {
        if (disableDeselect) {
          w.selected = true;
        } else if (shouldDeselectAll) {
          w.selected = false;
        } else {
          w.selected = !w.selected;
        }
      } else {
        w.selected = disableElse ? false : w.selected;
      }
    }
    return d;
  }

  export function hoverWebbings(
    data: IChartData,
    webbings: IChartWebbing[],
    shouldSelect = false,
  ): IChartData {
    let d = clone(data);
    if (shouldSelect) {
      d = selectOrDeselectWebbings(d, webbings, true, true);
    }
    for (const w of d.webbings) {
      if (webbings.find(w2 => w2.name === w.name)) {
        w.hovered = true;
        if (w.selected) {
          clearFocusedWebbings(d);
          w.focused = true;
        }
      } else {
        w.hovered = false;
      }
    }
    return d;
  }

  export function selectDataPoint(
    data: IChartData,
    webbing: IChartWebbing,
    index: number,
  ): IChartData {
    const d = clone(data);
    for (const w of d.webbings) {
      if (w.name === webbing.name) {
        w.crosshairPointIndex = index;
      } else {
        w.crosshairPointIndex = undefined;
      }
    }
    return d;
  }

  function clearFocusedWebbings(data: IChartData) {
    for (const w of data.webbings) {
      w.focused = false;
    }
  }
}
