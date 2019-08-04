import { data } from './data';

export function chartStrechRates() {
  return data.brands
    .map(brand => {
      return brand.webbings.map(webbing => {
        return {
          title: webbing.name,
          data: webbing.stretch.map(rate => {
            return {
              x: rate.kn,
              y: rate.percent,
            };
          }),
        };
      });
    })
    .reduce((a, b) => a.concat(b));
}

export function chartWeightRates() {
  return data.brands
    .map(brand => {
      return brand.webbings.map((webbing, index) => {
        return {
          title: webbing.name,
          data: [
            {
              x: webbing.weight,
              y: webbing.weight,
            },
          ],
        };
      });
    })
    .reduce((a, b) => a.concat(b));
}


export function chartPriceRates() {
  return data.brands
    .map(brand => {
      return brand.webbings.map((webbing, index) => {
        return {
          title: webbing.name,
          data: [
            {
              x: webbing.priceMeter.value,
              y: webbing.priceMeter.value,
            },
          ],
        };
      });
    })
    .reduce((a, b) => a.concat(b));
}

