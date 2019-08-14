import { IWebbing, IBrand } from './data';

export type ISeriesArray = ISeries[];

export interface ISeriesData {
  x: number | string;
  y: number;
  color?: string;
  size?: number;
  opacity?: number;
  webbingName: string;
}

export interface ISeries {
  title: string;
  selected?: boolean;
  hovered?: boolean;
  focused?: boolean;
  color?: string;
  data?: ISeriesData[];
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
  brandName: string;
  selected: boolean;
  hovered?: boolean;
  focused?: boolean;
  crosshairPointIndex?: number;
}
