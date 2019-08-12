import { IWebbing, IBrand } from './data';

export type ISeries = Serie[];

interface Serie {
  title: string;
  disabled?: boolean;
  color: string;
  data?: Array<{ x: number | string; y: number }>;
}

export interface IChartData {
  brands: IChartBrand[];
}

export interface IChartBrand extends IBrand {
  disabled?: boolean;
  webbings: IChartWebbing[];
}

export interface IChartWebbing extends IWebbing {
  disabled?: boolean;
}
