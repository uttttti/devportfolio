import React from 'react';
import './Page.scss';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Jumbotron from '../Jumbotron/Jumbotron';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import smoothscroll from 'smoothscroll-polyfill';

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

smoothscroll.polyfill();

const Page: React.FC<RouteComponentProps> = (routeProps: RouteComponentProps) => (
  <div className="Page" data-testid="Page">
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="app" data-testid="App" id="back-to-top-anchor">
          <div className="bg-img"></div>
          <Menu />
          <Jumbotron />
          <About />
          <Experience { ...routeProps }/>
          <Education { ...routeProps }/>
          <Projects { ...routeProps }/>
          <Skills { ...routeProps }/>
          <Contact />
          <Footer />
        </div>
    </ThemeProvider>
  </div>
);

export default Page;
