import * as styledComponents from 'styled-components';
import { IThemeInterface } from './ThemeProvider/themes/types';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeContext,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ThemeContext };
export default styled;
