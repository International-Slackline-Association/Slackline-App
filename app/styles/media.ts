import { css } from './styled-components';
import breakpoints from './breakpoints';

const media = Object.keys(breakpoints).reduce(
  (acc, label) => {
    acc[label] = (
      literals: TemplateStringsArray,
      // tslint:disable-next-line:trailing-comma
      ...placeholders: any[]
    ) => css`
      @media (min-width: ${breakpoints[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `;
    return acc;
  },
  // tslint:disable-next-line:no-object-literal-type-assertion
  {} as Record<
    keyof typeof breakpoints,
    (l: TemplateStringsArray, ...p: any[]) => string
  >,
);

export default media;
