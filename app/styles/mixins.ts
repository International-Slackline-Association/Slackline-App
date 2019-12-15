import { css } from './styled-components';
import { transitions } from 'polished';
import media from './media';

export const fontFamily = css`
  font-family: 'metropolis', Arial, Helvetica, sans-serif;
`;
export const elevatedShadow = css`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
`;

export const touchableOpacity = css`
  ${transitions(['opacity'], '0.2s')}
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    transition: none;
    opacity: 0.4;
  }
  &:focus {
    /* background-color: transparent; */
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

export const flexCoverCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const hideScrollBar = css`
  ${media.desktop`
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background: transparent; /* make scrollbar transparent */
  }`};
`;
