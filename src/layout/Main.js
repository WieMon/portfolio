import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../pages/About';

const Portfolio = lazy(() => import('../pages/Portfolio'));
const Contact = lazy(() => import('../pages/Contact'));

class Main extends Component {
  state = {}
  render() {
    return (
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path='/' exact component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Suspense>
      </Switch>
    );
  }
}

export default Main;
