import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/pages/Portfolio.scss';
import portfolio from '../images/portfolio.png';
import admin from '../images/admin.png';
import todolist from '../images/todolist.png';
import rps from '../images/rps.png';
import yummy from '../images/yummy-ice-cream.png';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Container>
        <Row className='portfolio__row'>
          <Col sm={12} md={6} className='portfolio__col'>
            <div className='portfolio__wrapper portfolio__wrapper--right'>
              <div className='portfolio__img-div'>
                <img src={yummy} width='800' height='860' alt='' className='portfolio__img'></img>
              </div>
              <div className='portfolio__description-div'>
                <h5 className='portfolio__title'>
                  Ice cream shop
                </h5>
                <p className='portfolio__description'>
                I built this web application to practice Vue. It has been integrated with the Firebase authentication and database.
                  <span className='portfolio__bold'> Tech stack</span>:
                   Vue.js - Vuex - Vue Resource - Vue Router - HTML - Sass/SCSS - JavaScript - Yarn
                </p>
              </div>
              <div className='portfolio__link-div'>
                <a
                  href='https://ice-cream-shop-9b22e.web.app/'
                  className='portfolio__link'
                  rel='noopener noreferrer'
                  target='_blank'>
                  demo
                </a>
                <a
                  href='https://github.com/WieMon/ice-cream-shop'
                  className='portfolio__link'
                  rel='noopener noreferrer'
                  target='_blank'>
                    code
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} className='portfolio__col'>
            <div className='portfolio__wrapper portfolio__wrapper--left'>
              <div className='portfolio__img-div'>
                <img src={portfolio} width='800' height='860' alt='portfolio' className='portfolio__img'></img>
              </div>
              <div className='portfolio__description-div'>
                <h5 className='portfolio__title'>
                  Portfolio
                </h5>
                <p className='portfolio__description'>
                  My portfolio webpage built in React with React Bootstrap used for responsive layout. Optimization was based on the Lighthouse report.
                  <span className='portfolio__bold'> Tech stack</span>:
                   React - React Router - React Bootstrap - HTML - Sass/SCSS - JavaScript - Yarn
                </p>
              </div>
              <div className='portfolio__link-div'>
                <a
                  href='https://wiemon.github.io/portfolio/'
                  className='portfolio__link'
                  rel='noopener noreferrer'
                  target='_blank'>
                  demo
                </a>
                <a
                  href='https://github.com/WieMon/portfolio'
                  className='portfolio__link'
                  rel='noopener noreferrer'
                  target='_blank'>
                    code
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='portfolio__row'>
          <Col sm={12} md={6} className='portfolio__col'>
            <div className='portfolio__wrapper portfolio__wrapper--right'>
              <div className='portfolio__img-div'>
                <img src={admin} width='800' height='860' alt='' className='portfolio__img'></img>
              </div>
              <div className='portfolio__description-div'>
                <h5 className='portfolio__title'>
                  Administration panel
                </h5>
                <p className='portfolio__description'>
                  This project was based on the PSD templates provided during the Web Developer Bootcamp. It uses Chart.js, Glyphter and Font Awesome.
                  <span className='portfolio__bold'> Tech stack</span>:
                   HTML - Sass/SCSS - JavaScript - npm
                </p>
              </div>
              <div className='portfolio__link-div'>
                <a
                  href='https://wiemon.github.io/admin-project/'
                  className='portfolio__link'
                  rel='noopener noreferrer'
                  target='_blank'>
                  demo
                </a>
                <a
                  href='https://github.com/WieMon/admin-project'
                  className='portfolio__link'
                  rel='noopener noreferrer'
                  target='_blank'>
                    code
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} className='portfolio__col'>
            <div className='portfolio__wrapper portfolio__wrapper--left'>
              <div className='portfolio__img-div'>
                <img src={todolist} width='800' height='860' alt='To-Do List' className='portfolio__img'></img>
              </div>
              <div className='portfolio__description-div'>
                <h5>
                  To-do list
                </h5>
                <p className='portfolio__description'>
                  The task list built in React using CRA with modified configurations. The to-dos can be flagged as important and due dates manually selected.
                  <span className='portfolio__bold'> Tech stack</span>:
                   React - HTML - Sass/SCSS - JavaScript - Yarn
                </p>
              </div>
              <div className='portfolio__link-div'>
                <a
                  href='https://wiemon.github.io/to-do-app-react/'
                  className='portfolio__link'
                  rel='noopener noreferrer'
                  target='_blank'>
                  demo
                </a>
                <a
                  href='https://github.com/WieMon/to-do-app-react'
                  className='portfolio__link'
                  rel='noopener noreferrer'
                  target='_blank'>
                    code
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} className='portfolio__col'>
            <div className='portfolio__wrapper portfolio__wrapper--right'>
              <div className='portfolio__img-div'>
                <img src={rps} width='800' height='860' alt='Rock, paper, scissors' className='portfolio__img'></img>
              </div>
              <div className='portfolio__description-div'>
                <h5 className='portfolio__title'>
                  Rock, paper, scissors
                </h5>
                <p className='portfolio__description'>
                This game was built in vanilla JavaScript following the procedural programming paradigm. Player is asked to enter a name and choose up to 10 rounds.
                  <span className='portfolio__bold'> Tech stack</span>:
                   HTML - Sass/SCSS - JavaScript - npm
                </p>
              </div>
              <div className='portfolio__link-div'>
                <a
                  href='https://wiemon.github.io/rock-paper-scissors-pp-js/'
                  className='portfolio__link'
                  rel='noopener noreferrer'
                  target='_blank'>
                  demo
                </a>
                <a
                  href='https://github.com/WieMon/rock-paper-scissors-pp-js'
                  className='portfolio__link'
                  rel='noopener noreferrer'
                  target='_blank'>
                  code
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} className='portfolio__col'>
            <div className='portfolio__wrapper portfolio__wrapper--right portfolio__wrapper--prepare'>
              <div className='portfolio__img-div'>
              </div>
              <div className='portfolio__description-div'>
                <h5 className='portfolio__title'>
                  A new project is currently being prepared...
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
