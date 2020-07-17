import React from 'react';
import './Page.scss';
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

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Page: React.FC<RouteComponentProps> = () => (
  <div className="Page" data-testid="Page">
    <div className="app" data-testid="App" id="back-to-top-anchor">
      <div className="bg-img"></div>
      <Menu />
      <Jumbotron />
      <About />
      <ErrorBoundary>{() => <Experience />}</ErrorBoundary>
      <ErrorBoundary>{() => <Education />}</ErrorBoundary>
      <ErrorBoundary>{() => <Projects />}</ErrorBoundary>
      <ErrorBoundary>{()=> <Skills />}</ErrorBoundary>
      <Contact />
      <Footer />
    </div>
  </div>
);

export default Page;