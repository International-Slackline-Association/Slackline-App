import { IWebbing, IBrand } from './data';

export type ISeriesArray = ISeries[];

export interface ISeries {
  title: string;
  disabled?: boolean;
  color?: string;
  data?: Array<{
    y0?: number;
    x: number | string;
    y: number;
    color?: string;
    size?: number;
    opacity?: number;
  }>;
}

export type ChartType = 'Stretch' | 'Weight' | 'Price' | 'MBS';

export interface IChart {
  lineMarkSeries?: ISeriesArray;
  barSeries?: ISeries;
  xAxisTitle: string;
  yAxisTitle: string;
  xAxisTickTotal?: number;
  yAxisTickTotal?: number;
  xAxisAngle?: number;
  xAxisPadding?: number;
}

export interface IChartData {
  webbings: IChartWebbing[];
}

export interface IChartWebbing extends IWebbing {
  disabled?: boolean;
  brandName: string;
}
