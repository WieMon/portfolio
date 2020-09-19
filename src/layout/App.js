import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  state = {  }
  render() {
    return (
      <Router>
        <Header />
        <Container>
          <Main />
        </Container>
        <Footer />
      </Router>
    );
  }
}

export default App;
