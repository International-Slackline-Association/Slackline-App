import { createGlobalStyle } from './styled-components';
import { fontFamily } from './mixins';
import media from './media';

/* tslint:disable:max-line-length */
const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
        font-size: 100%;
        ${media.desktop`
            font-size: 150%;
        `}
    }
    body {
        font-family: 'metropolis', Arial, Helvetica, sans-serif;
        background-color: ${props => props.theme.background};
        height: 100%;
        width: 100%;
        color: ${p => p.theme.text};
    }
    #root {
        height: 100%;
    }
`;

export default GlobalStyles;
