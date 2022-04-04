// globalStyles.js

import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    ${(theme) => css`
      background: ${theme.colors.mainBg};
    `}
  }
`;
