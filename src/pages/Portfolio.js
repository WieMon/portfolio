import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/pages/Portfolio.scss';
import portfoliotest from '../images/admin_560.png';
import admin from '../images/admin_800.png';
import todolist from '../images/todolist_800.png';
import rps from '../images/rps_800.png';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Container className='p-0'>
        <Row className='portfolio__row'>
          <Col sm={12} md={6} className='p-2 portfolio__col'>
            <div className='portfolio__wrapper'>
              <div className='portfolio__img-div'>
                <img src={portfoliotest} alt='' className='portfolio__img'></img>
              </div>
              <div className='portfolio__description-div'>
                <h5 className='portfolio__title'>
                  Portfolio
                </h5>
                <p>
                  TEST   My individual project based on the PSD templates provided during the Web Developer Bootcamp.
                </p>
                <p className='test'>
                  <span className='portfolio__tech'>Tech stack</span>: <span className='portfolio__tech'>React</span>-<span className='portfolio__tech'>React Router</span>-<span className='portfolio__tech'>React Bootstrap</span>-<span className='portfolio__tech'>CRA</span>-<span className='portfolio__tech'>HTML</span>-<span className='portfolio__tech'>Sass/SCSS</span>-<span className='portfolio__tech'>ESLint</span>-<span className='portfolio__tech'>EditorConfig</span>-<span className='portfolio__tech'>Yarn</span>
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
          <Col sm={12} md={6} className='p-2 portfolio__col'>
            <div className='portfolio__wrapper'>
              <div className='portfolio__img-div'>
                <img src={admin} alt='' className='portfolio__img'></img>
              </div>
              <div className='portfolio__description-div'>
                <h5 className='portfolio__title'>
                  Administration panel
                </h5>
                <p>
                  My individual project based on the PSD templates provided during the Web Developer Bootcamp.
                </p>
                <p className='test'>
                  <span className='portfolio__tech'>Tech stack</span>: <span className='portfolio__tech'>JavaScript</span>-<span className='portfolio__tech'>HTML</span>-<span className='portfolio__tech'>Sass/SCSS</span>-<span className='portfolio__tech'>ESLint</span>-<span className='portfolio__tech'>EditorConfig</span>-<span className='portfolio__tech'>stylelint</span>-<span className='portfolio__tech'>npm</span>
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
        </Row>
        <Row className='portfolio__row'>
          <Col sm={12} md={6} className='p-2 portfolio__col'>
            <div className='portfolio__wrapper'>
              <div className='portfolio__img-div'>
                <img src={todolist} alt='To-Do List' className='portfolio__img'></img>
              </div>
              <div className='portfolio__description-div'>
                <h5>
                  To-do list
                </h5>
                <p>
                  The task list built in React. The to-dos can be flagged as important and due dates selected manually.
                </p>
                <p className='test'>
                  <span className='portfolio__tech'>Tech stack</span>: <span className='portfolio__tech'>React</span>-<span className='portfolio__tech'>CRA</span>-<span className='portfolio__tech'>HTML</span>-<span className='portfolio__tech'>Sass/SCSS</span>-<span className='portfolio__tech'>ESLint</span>-<span className='portfolio__tech'>EditorConfig</span>-<span className='portfolio__tech'>Yarn</span>
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
          <Col sm={12} md={6} className='p-2 portfolio__col'>
            <div className='portfolio__wrapper'>
              <div className='portfolio__img-div'>
                <img src={rps} alt='Rock, paper, scissors' className='portfolio__img'></img>
              </div>
              <div className='portfolio__description-div'>
                <h5 className='portfolio__title'>
                  Rock, paper, scissors
                </h5>
                <p>
                  My first game built in vanilla JavaScript. The player is asked to enter a name and choose up to 10 rounds.
                </p>
                <p className='test'>
                  <span className='portfolio__tech'>Tech stack</span>: <span className='portfolio__tech'>JavaScript</span>-<span className='portfolio__tech'>HTML</span>-<span className='portfolio__tech'>Sass/SCSS</span>-<span className='portfolio__tech'>ESLint</span>-<span className='portfolio__tech'>EditorConfig</span>-<span className='portfolio__tech test'>npm</span>
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
                  link
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
