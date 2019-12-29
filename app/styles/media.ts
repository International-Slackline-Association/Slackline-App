import { css } from './styled-components';
import breakpoints from './breakpoints';

const media = Object.keys(breakpoints).reduce(
  (acc, label) => {
    acc[label] = (
      literals: TemplateStringsArray,
      // tslint:disable-next-line:trailing-comma
      ...placeholders: any[]
    ) => {
      const l = label as keyof typeof breakpoints;
      if (l === 'isStandalone') {
        return css`
          @media all and (display-mode: standalone) {
            ${css(literals, ...placeholders)};
          }
        `;
      } else {
        return css`
          @media (min-width: ${breakpoints[label]}px) {
            ${css(literals, ...placeholders)};
          }
        `;
      }
    };
    return acc;
  },
  // tslint:disable-next-line:no-object-literal-type-assertion
  {} as Record<
    keyof typeof breakpoints,
    (l: TemplateStringsArray, ...p: any[]) => string
  >,
);


export function isMobile() {
  return window.innerWidth < breakpoints.desktop;
}

export default media;
