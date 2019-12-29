export interface IBreakpoints {
  isStandalone: any;
  mobile: number;
  desktop: number;
}

const breakpoints: IBreakpoints = {
  isStandalone: true,
  mobile: 0,
  desktop: 1024,
};

export default breakpoints;
