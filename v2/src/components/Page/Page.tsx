import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Menu from '../Menu/Menu';
import Jumbotron from '../Jumbotron/Jumbotron';
import About from '../About/About';
import Experience from '../Experience/Experience';
import './Page.scss';
import { RouteComponentProps } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#BA68C8',
      contrastText: '#F3E5F5'
    },
    secondary: {
      main: '#EEE',
      contrastText: '#BA68C8'
    },
    text: {
      primary: '#453B47'
    }
  }
});

const Page: React.FC<RouteComponentProps> = (routeProps: RouteComponentProps) => (
  <div className="Page" data-testid="Page">
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="app" data-testid="App">
          <div className="bg-img"></div>
          <Menu />
          <Jumbotron />
          <About />
          <Experience { ...routeProps }/>
        </div>
    </ThemeProvider>
  </div>
);

export default Page;
