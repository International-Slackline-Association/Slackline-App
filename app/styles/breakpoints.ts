export interface IBreakpoints {
  pwaInstalled: any;
  mobile: number;
  desktop: number;
}

const breakpoints: IBreakpoints = {
  pwaInstalled: true,
  mobile: 0,
  desktop: 1024,
};

export default breakpoints;
