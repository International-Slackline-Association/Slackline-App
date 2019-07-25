import { createGlobalStyle } from './styled-components';
import { fontFamily } from './mixins';
import media from './media';

/* tslint:disable:max-line-length */
const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
        max-height: 100%;
        font-size: 100%;
    }
    body.fontLoaded {
        font-family: 'metropolis', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        background-color: ${props => props.theme.background};
        /* letter-spacing: 0.05em; */
        height: 100%;
        max-height: 100%;
        width: 100%;
        color: ${p => p.theme.text};
        a {
            text-decoration: none;
            color: ${p => p.theme.text};
        }
        input, select, textarea, button {
            font-family: 'metropolis', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: ${p => p.theme.text};
        }
    }
    #root {
        height: 100%;
    }
`;

export default GlobalStyles;
