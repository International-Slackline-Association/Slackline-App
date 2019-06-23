import { rgba, darken, lighten } from 'polished';
import colors from './colors';
import { IThemeInterface } from './types';

const theme: IThemeInterface = {
  name: 'dark',

  text: rgba(colors.white, 1),
  textSecondary: rgba(colors.white, 0.6),
  textTertiary: rgba(colors.white, 0.3),

  // fill: rgba(lighten(0.03, colors.primary), 1),
  // fillSecondary: rgba(lighten(0.03, colors.primary), 0.45),
  // fillTertiary: rgba(lighten(0.03, colors.primary), 0.32),
  // fillQuaternary: rgba(lighten(0.03, colors.primary), 0.16),

  // textOnFill: rgba(colors.white, 1),
  // textOnFillSecondary: rgba(colors.white, 1),
  // textOnFillTertiary: rgba(lighten(0.05, colors.primary), 1),
  // textOnFillQuaternary: rgba(lighten(0.03, colors.primary), 1),

  brand: rgba(colors.brand, 1),
  brandSecondary: rgba(colors.brand, 0.3),

  border: rgba(colors.white, 0.1),

  background: rgba(colors.black, 1),
  backgroundTransparent: rgba(colors.white, 0.07),
  surface: rgba(darken(0.11, colors.dark), 1),
  overlay: rgba(colors.black, 0.5),

  // red: rgba(colors.red, 1),
  // redSecondary: rgba(colors.red, 0.5),
  // redTertiary: rgba(colors.red, 0.27),
  // redQuaternary: rgba(colors.red, 0.16),

  // textOnRed: rgba(colors.white, 1),
  // textOnRedSecondary: rgba(colors.white, 1),
  // textOnRedTertiary: rgba(lighten(0.08, colors.red), 1),
  // textOnRedQuaternary: rgba(lighten(0.03, colors.red), 1),

  // green: rgba(colors.green, 1),
  // greenSecondary: rgba(colors.green, 0.58),
  // greenTertiary: rgba(colors.green, 0.32),
  // greenQuaternary: rgba(colors.green, 0.16),

  // textOnGreen: rgba(colors.white, 1),
  // textOnGreenSecondary: rgba(colors.white, 1),
  // textOnGreenTertiary: rgba(lighten(0.08, colors.green), 1),
  // textOnGreenQuaternary: rgba(darken(0.03, colors.green), 1),
};

export default theme;
