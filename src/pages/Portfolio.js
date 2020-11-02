import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/pages/Portfolio.scss';
import portfolio_800 from '../images/portfolio_800(4).png';
import admin800 from '../images/admin_800.png';
import todolist800 from '../images/todolist_800.png';
import rps800 from '../images/rps_800.png';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Container>
        <Row className='portfolio__row'>
          <Col sm={12} md={6} className='portfolio__col'>
            <div className='portfolio__wrapper portfolio__wrapper--left'>
              <div className='portfolio__img-div'>
                <img src={portfolio_800} width='800' height='860' alt='portfolio' className='portfolio__img'></img>
              </div>
              <div className='portfolio__description-div'>
                <h5 className='portfolio__title'>
                  Portfolio
                </h5>
                <p className='portfolio__description'>
                  My portfolio webpage built in React with React Bootstrap used for responsive layout. Optimization was based on the Lighthouse report.
                  <span className='portfolio__bold'> Tech stack</span>:
                   React - React Router - React Bootstrap - HTML - Sass/SCSS - code review tools - Yarn
                </p>
              </div>
              <div className='portfolio__link-div'>
                <a
                  href='http'
                  className='portfolio__link'
                  rel='noopener noreferrer'
                  target='_blank'>
                  demo
                </a>
                <a
                  href='http'
                  className='portfolio__link'
                  rel='noopener noreferrer'
                  target='_blank'>
                    code
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} className='portfolio__col'>
            <div className='portfolio__wrapper portfolio__wrapper--right'>
              <div className='portfolio__img-div'>
                <img src={admin800} width='800' height='860' alt='' className='portfolio__img'></img>
              </div>
              <div className='portfolio__description-div'>
                <h5 className='portfolio__title'>
                  Administration panel
                </h5>
                <p className='portfolio__description'>
                  This project was based on the PSD templates provided during the Web Developer Bootcamp. It uses Chart.js, Glyphter and Font Awesome.
                  <span className='portfolio__bold'> Tech stack</span>:
                   HTML - Sass/SCSS - JavaScript - code review tools - npm
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
                  href='https'
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
            <div className='portfolio__wrapper portfolio__wrapper--left'>
              <div className='portfolio__img-div'>
                <img src={todolist800} width='800' height='860' alt='To-Do List' className='portfolio__img'></img>
              </div>
              <div className='portfolio__description-div'>
                <h5>
                  To-do list
                </h5>
                <p className='portfolio__description'>
                  The task list built in React using CRA with modified configurations. The to-dos can be flagged as important and due dates manually selected.
                  <span className='portfolio__bold'> Tech stack</span>:
                   React - JavaScript - HTML - Sass/SCSS - code review tools - Yarn
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
                  href='http'
                  className='portfolio__link'
                  rel='noopener noreferrer'
                  target='_blank'>
                    code
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} className='portfolio__col'>
            <div className='portfolio__wrapper portfolio__wrapper--right'>
              <div className='portfolio__img-div'>
                <img src={rps800} width='800' height='860' alt='Rock, paper, scissors' className='portfolio__img'></img>
              </div>
              <div className='portfolio__description-div'>
                <h5 className='portfolio__title'>
                  Rock, paper, scissors
                </h5>
                <p className='portfolio__description'>
                This game was built in vanilla JavaScript following the procedural programming paradigm. Player is asked to enter a name and choose up to 10 rounds.
                  <span className='portfolio__bold'> Tech stack</span>:
                  JavaScript - HTML - Sass/SCSS - code review tools - npm
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
                  href='http'
                  className='portfolio__link'
                  rel='noopener noreferrer'
                  target='_blank'>
                  code
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
