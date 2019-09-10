export interface IThemesInterface {
  dark: IThemeInterface;
}

interface IThemeInterface {
  name: keyof IThemesInterface;

  text: string;
  textSecondary: string;
  textTertiary: string;

  // fill: string;
  // fillSecondary: string;
  // fillTertiary: string;
  // fillQuaternary: string;

  // textOnFill: string;
  // textOnFillSecondary: string;
  // textOnFillTertiary: string;
  // textOnFillQuaternary: string;

  brand: string;
  brandSecondary: string;

  border: string;

  background: string;
  backgroundTransparent: string;
  surfaceTransparent: string;
  surface: string;
  overlay: string;

  red: string;
  redSecondary: string;
  redTertiary: string;
  redQuaternary: string;

  // textOnRed: string;
  // textOnRedSecondary: string;
  // textOnRedTertiary: string;
  // textOnRedQuaternary: string;

  green: string;
  // greenSecondary: string;
  // greenTertiary: string;
  // greenQuaternary: string;

  // textOnGreen: string;
  // textOnGreenSecondary: string;
  // textOnGreenTertiary: string;
  // textOnGreenQuaternary: string;
}
