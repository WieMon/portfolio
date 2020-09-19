import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
//import { Container, Row, Col } from 'react-bootstrap';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import '../styles/layout/Main.scss';

class Main extends Component {
  state = {}
  render() {
    return (
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
    );
  }
}

export default Main;


























