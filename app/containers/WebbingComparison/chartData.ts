import { IChartData, ISeries } from './interface';
import { data } from './data';

export function generateChartData(): IChartData {
  return data;
}

export function stretchSeries(data: IChartData): ISeries {
  // const webbings = getWebbings();
  return data.brands
    .map(brand => {
      return brand.webbings.map(webbing => {
        return {
          title: webbing.name,
          color: webbing.colorCode,
          disabled: webbing.disabled,
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

// export function chartWeightRates() {
//   return data.brands
//     .map(brand => {
//       return brand.webbings.map((webbing, index) => {
//         return {
//           title: webbing.name,
//           color: webbing.colorCode,
//           data: [
//             {
//               x: webbing.weight,
//               y: webbing.weight,
//             },
//           ],
//         };
//       });
//     })
//     .reduce((a, b) => a.concat(b));
// }

// export function chartPriceRates() {
//   return data.brands
//     .map(brand => {
//       return brand.webbings.map((webbing, index) => {
//         return {
//           title: webbing.name,
//           color: webbing.colorCode,
//           data: [
//             {
//               x: webbing.priceMeter.value,
//               y: webbing.priceMeter.value,
//             },
//           ],
//         };
//       });
//     })
//     .reduce((a, b) => a.concat(b));
// }
