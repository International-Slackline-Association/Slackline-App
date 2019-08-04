import { createGlobalStyle } from './styled-components';
import { fontFamily } from './mixins';
import media from './media';
import './font-face.css';

/* tslint:disable:max-line-length */
const GlobalStyles = createGlobalStyle`
    html {
        font-size: 100%;
        height: 100%;
        width: 100%;
    }
    body {
        font-family: 'metropolis', Arial, Helvetica, sans-serif;
        background-color: ${props => props.theme.background};
        height: 100%;
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
`;

export default GlobalStyles;
