import {
  IChartData,
  ISeriesArray,
  IChart,
  ChartType,
  ISeries,
} from './interface';

export function generateChart(
  selectedChartType: ChartType,
  data: IChartData,
): IChart {
  switch (selectedChartType) {
    case 'Stretch':
      return {
        lineMarkSeries: stretchSeries(data),
        xAxisTitle: 'kn',
        yAxisTitle: 'percent',
        xAxisTickTotal: 20,
        yAxisTickTotal: 20,
      };
    case 'Weight':
      return {
        barSeries: weightSeries(data),
        xAxisTitle: '',
        yAxisTitle: 'gram/meter',
        xAxisTickTotal: undefined,
        yAxisTickTotal: 20,
        xAxisAngle: 90,
        xAxisPadding: -15,
      };
    case 'Price':
      return {
        barSeries: priceSeries(data),
        xAxisTitle: '',
        yAxisTitle: 'euro/meter',
        xAxisTickTotal: undefined,
        yAxisTickTotal: 20,
        xAxisAngle: 90,
        xAxisPadding: -15,
      };
    case 'MBS':
      return {
        barSeries: mbsSeries(data),
        xAxisTitle: '',
        yAxisTitle: 'breaking strength in KN',
        xAxisTickTotal: undefined,
        yAxisTickTotal: 20,
        xAxisAngle: 90,
        xAxisPadding: -15,
      };
    default:
      return {
        lineMarkSeries: stretchSeries(data),
        xAxisTitle: 'kn',
        yAxisTitle: 'percent',
        xAxisTickTotal: 20,
        yAxisTickTotal: 20,
      };
  }
}

export function stretchSeries(data: IChartData): ISeriesArray {
  return data.webbings.map(webbing => {
    return {
      title: webbing.name,
      color: webbing.colorCode,
      disabled: webbing.disabled,
      data: webbing.stretch.map(rate => {
        return {
          x: rate.kn,
          y: rate.percent,
          fill: webbing.colorCode,
          size: 3,
        };
      }),
    };
  });
}

export function weightSeries(data: IChartData, dummy = false): ISeries {
  const seriesData = data.webbings
    .sort((a, b) => (a.weight < b.weight ? -1 : 1))
    .map((webbing, index) => {
      return {
        x: dummy ? 0 : webbing.name,
        y: webbing.weight,
        color: webbing.colorCode,
        opacity: webbing.disabled ? 0.05 : 1,
      };
    });

  return {
    title: 'Weight',
    data: seriesData,
  };
}

export function priceSeries(data: IChartData): ISeries {
  const seriesData = data.webbings
    .sort((a, b) => (a.priceMeter.value < b.priceMeter.value ? -1 : 1))
    .map((webbing, index) => {
      return {
        x: webbing.name,
        y: webbing.priceMeter.value,
        color: webbing.colorCode,
        opacity: webbing.disabled ? 0.05 : 1,
      };
    });

  return {
    title: 'Price',
    data: seriesData,
  };
}

export function mbsSeries(data: IChartData): ISeries {
  const seriesData = data.webbings
    .sort((a, b) => (a.breakingStrength < b.breakingStrength ? -1 : 1))
    .map((webbing, index) => {
      return {
        x: webbing.name,
        y: webbing.breakingStrength,
        color: webbing.colorCode,
        opacity: webbing.disabled ? 0.05 : 1,
      };
    });

  return {
    title: 'MBS',
    data: seriesData,
  };
}
