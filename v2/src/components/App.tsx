import React from 'react';
import 'fontsource-poiret-one'
import 'fontsource-m-plus-1p'
import './App.scss';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Page from './Page/Page';
import Error from './Error/Error';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import { THEME_SETTING } from '../constant'

const theme = createMuiTheme(THEME_SETTING);
smoothscroll.polyfill();

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        <Route path="/error" component={Error} />
        <Route component={Page} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
