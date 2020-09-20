import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/pages/Portfolio.scss';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Container>
        <Row>
          <Col sm={12} md={6} className='p-0'>
            <div className='portfolio__wrapper'>
              <div className='portfolio__img-div'>
                <img src='' alt='' className='portfolio__img'></img>
              </div>
              <div className='portfolio-description-div'>
                <h5 className='portfolio__description'>
                  Portfolio
                </h5>
                <p>
                  Tech stack: React <span className='portfolio__dot'></span> React Router <span className='portfolio__dot'></span> React Bootstrap <span className='portfolio__dot'></span> CRA <span className='portfolio__dot'></span> HTML <span className='portfolio__dot'></span> Sass/SCSS <span className='portfolio__dot'></span> ESLint <span className='portfolio__dot'></span> EditorConfig <span className='portfolio__dot'></span> Yarn
                </p>
                <div className='portfolio__link-div'>
                  <a
                    href=''
                    className='portfolio__link'
                    rel='noopener noreferrer'
                    target='_blank'>
                    demo
                  </a>
                  <a
                    href=''
                    className='portfolio__link'
                    rel='noopener noreferrer'
                    target='_blank'>
                      code
                  </a>
                </div>
              </div>

            </div>
          </Col>
          <Col sm={12} md={6} className='p-0'>
            <div className='portfolio__wrapper'>
              <div className='portfolio__img-div'>
                <img src='' alt='' className='portfolio__img'></img>
              </div>
              <div className='portfolio-description-div'>
                <h5 className='portfolio__description'>
                  Administration panel
                </h5>
                <p>
                Tech stack: JavaScript <span className='portfolio__dot'></span> HTML <span className='portfolio__dot'></span> Sass/SCSS <span className='portfolio__dot'></span> ESLint <span className='portfolio__dot'></span> EditorConfig <span className='portfolio__dot'></span> stylelint <span className='portfolio__dot'></span> npm
                </p>
                <div className='portfolio__link-div'>
                  <a
                    href=''
                    className='portfolio__link'
                    rel='noopener noreferrer'
                    target='_blank'>
                    demo
                  </a>
                  <a
                    href=''
                    className='portfolio__link'
                    rel='noopener noreferrer'
                    target='_blank'>
                      link
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} className='p-0'>
            <div className='portfolio__wrapper'>
              <div className='portfolio__img-div'>
                <img src='' alt='' className='portfolio__img'></img>
              </div>
              <div className='portfolio-description-div'>
                <h5 className='portfolio__description'>
                  To-do list
                </h5>
                <p>
                  Tech stack: React <span className='portfolio__dot'></span> CRA <span className='portfolio__dot'></span> HTML <span className='portfolio__dot'></span> Sass/SCSS <span className='portfolio__dot'></span> ESLint <span className='portfolio__dot'></span> EditorConfig <span className='portfolio__dot'></span> Yarn
                </p>
                <div className='portfolio__link-div'>
                  <a
                    href=''
                    className='portfolio__link'
                    rel='noopener noreferrer'
                    target='_blank'>
                    demo
                  </a>
                  <a
                    href=''
                    className='portfolio__link'
                    rel='noopener noreferrer'
                    target='_blank'>
                      link
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} className='p-0'>
            <div className='portfolio__wrapper'>
              <div className='portfolio__img-div'>
                <img src='' alt='' className='portfolio__img'></img>
              </div>
              <div className='portfolio-description-div'>
                <h5 className='portfolio__description'>
                  Rock, paper, scissors
                </h5>
                <p>
                  Tech stack: JavaScript <span className='portfolio__dot'></span> HTML <span className='portfolio__dot'></span> Sass/SCSS <span className='portfolio__dot'></span> ESLint <span className='portfolio__dot'></span> EditorConfig <span className='portfolio__dot'></span> npm
                </p>
                <div className='portfolio__link-div'>
                  <a
                    href=''
                    className='portfolio__link'
                    rel='noopener noreferrer'
                    target='_blank'>
                    demo
                  </a>
                  <a
                    href=''
                    className='portfolio__link'
                    rel='noopener noreferrer'
                    target='_blank'>
                      link
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;

