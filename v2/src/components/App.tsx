import React from 'react';
import 'fontsource-poiret-one'
import 'fontsource-m-plus-1p'
import './App.scss';
import Page from './Page/Page';
import Error from './Error/Error';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Page} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default App;
