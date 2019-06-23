import { css } from './styled-components';
import { transitions } from 'polished';

export const fontFamily = css`
  font-family: 'metropolis', Arial, Helvetica, sans-serif;
`;

export const surfaceWithShadow = css`
  background-color: ${p => p.theme.surface};
  color: ${p => p.theme.text};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
`;

export const baseRadius = css`
  border-radius: 4px;
`;

export const headerHeight = css`
  height: 4.625rem;
`;

export const resetButtonStyle = css`
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  outline: none;
  ${fontFamily};
  cursor: pointer;
  font-size: 1rem;
`;

export const touchableOpacity = css`
  ${transitions(['opacity'], '0.2s')}

  &:hover {
    opacity: 0.8;
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
