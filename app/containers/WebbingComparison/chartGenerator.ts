import { IChartData, ISeries, IChart, ChartType } from './interface';

export function generateChart(
  selectedChartType: ChartType,
  data: IChartData,
): IChart {
  switch (selectedChartType) {
    case 'Stretch':
      return {
        series: stretchSeries(data),
        xAxisTitle: 'kn',
        yAxisTitle: 'percent',
        xAxisTickTotal: 20,
        yAxisTickTotal: 20,
      };
    case 'Weight':
      return {
        series: weightSeries(data),
        xAxisTitle: 'webbings',
        yAxisTitle: 'gram per meter',
        xAxisTickTotal: undefined,
        yAxisTickTotal: 10,
      };
    default:
      return {
        series: stretchSeries(data),
        xAxisTitle: 'kn',
        yAxisTitle: 'percent',
        xAxisTickTotal: 20,
        yAxisTickTotal: 20,
      };
  }
}

export function stretchSeries(data: IChartData): ISeries {
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

export function weightSeries(data: IChartData): ISeries {
  return data.brands
    .map(brand => {
      return brand.webbings.map((webbing, index) => {
        return {
          title: webbing.name,
          color: webbing.colorCode,
          disabled: webbing.disabled,
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

export function priceSeries(data: IChartData): ISeries {
  return data.brands
    .map(brand => {
      return brand.webbings.map((webbing, index) => {
        return {
          title: webbing.name,
          color: webbing.colorCode,
          disabled: webbing.disabled,
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
