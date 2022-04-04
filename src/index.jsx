import React from 'react';
import ReactDOM from 'react-dom';
import Home from './templates/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global-styles';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
