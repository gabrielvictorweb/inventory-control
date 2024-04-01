import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --max-width-content: 1200px;

        --footer-height: 100px;

        @media (min-width: 64em) {
            --footer-height: 100px;
        }
    }

    *, *:before, *:after {
        margin: 0;
        padding: 0;
        outline: 0;
        font-size: 1em;
        font-family: "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    h1 {
        font-size: 1.5em;
        font-weight: 700;
    }

    h2 {
        font-size: 1.8em;
    }

    h3 {
        font-size: 1.6em;
    }

    img {
        max-width: 100%;
    }

    body, html, #root {
        height: 100%;
        min-height: 100%;
    }

    .App {
        position: relative;
        min-height: 100%;
    }

    .App::after {
        content: "";
        clear: both;
        display: table;
    }

    /* ESTRUTURA */
    .container {
        width: 100%;
        float: left;
    }

    .content {
        width: 90%;
        margin: 0 auto;
        max-width: var(--max-width-content);
    }

    .clear {
        clear: both;
    }

    .pointer {
        cursor: pointer;
    }
`;
