import { IWebbing, IBrand } from './data';

export type ISeries = Serie[];

interface Serie {
  title: string;
  disabled?: boolean;
  color: string;
  data?: Array<{ x: number | string; y: number }>;
}

export type ChartType = 'Stretch' | 'Weight' | 'Price' | 'MBS';

export interface IChart {
  series: ISeries;
  xAxisTitle: string;
  yAxisTitle: string;
  xAxisTickTotal?: number;
  yAxisTickTotal?: number;
}

export interface IChartData {
  webbings: IChartWebbing[];
}

export interface IChartWebbing extends IWebbing {
  disabled?: boolean;
  brandName: string;
}
