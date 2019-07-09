import { css } from './styled-components';
import { transitions } from 'polished';

export const fontFamily = css`
  font-family: 'metropolis', Arial, Helvetica, sans-serif;
`;

export const touchableOpacity = css`
  ${transitions(['opacity'], '0.2s')}

  &:hover {
    opacity: 0.7;
  }

  &:active {
    transition: none;
    opacity: 0.4;
  }
`;

export const touchableColor = (
  normal: string,
  highlight: string,
  touch: string,
) => css`
  ${transitions(['color'], '0.2s')}
  color: ${normal};

  &:hover {
    color: ${highlight};
  }

  &:active {
    transition: none;
    color: ${touch};
  }
`;
