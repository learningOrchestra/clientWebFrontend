import { createGlobalStyle, css } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${() => css`
    :root {
      --sidebar-width: ${theme.sidebarWidth.open};
      --navbar-height: ${theme.navbarHeight};
      --control-bar-height: ${theme.controlBarHeight};
    }
  `}

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    box-sizing: border-box;
    vertical-align: baseline;
    outline:none;
  }

  .layout {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .item-svg {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 40px;

    & > svg {
      fill: #232323;
    }
  }
`;

export default GlobalStyle;
