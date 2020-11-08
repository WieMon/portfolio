import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/pages/About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faReact,
  faBootstrap,
  faGitAlt,
  faNpm,
  faYarn,
  faJira,
  faSlack,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className='about'>
      <Container>
        <Row className='about__row about__row--text'>
          <Col sm={12} className='about__title-col'>
            <h5 className='about__title about__title--welcome'>
              Welcome...
            </h5>
          </Col>
          <Col sm={12} className='about__text-col'>
            <p>
              My name is Monika and I am looking for a position of <span className='about__bold'>junior front-end developer</span>.
            </p>
            <p>
              Since 2019 I have been learning the web development through a several-month long bootcamp (<span className='about__bold'>Kodilla Web Developer</span>), the online and face-to-face courses (<span className='about__bold'>Udemy</span>, <span className='about__bold'>Stacja IT</span>), and on my own.
            </p>
            <p>
              Before that, I had modelled in the <span className='about__bold'>R language for statistical computing </span>during my PhD project.
              I also used graphical packages of <span className='about__bold'>R</span> and <span className='about__bold'>CorelDraw</span> to present the complex data in audience-friendly ways.
            </p>
            <p>
              After my PhD, I worked in fast-paced environment of large corporations. Ever since then effective multitasking and cross-cultural communication in <span className='about__bold'>English</span> and, occasionally, in <span className='about__bold'>German</span> became my daily routine.
            </p>
            <p>
              However, I am passionate about learning, analyzing and solving problems. Thus, I decided to look for another possibility for my job that would allow me to combine my desire to continuous development and the experience I have got so far.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xl={12} className='about__title-col'>
            <h5 className='about__title about__title--skills'>
            My skills so far ...
            </h5>
          </Col>
        </Row>
        <Row className='about__row about__row--skills'>
          <Col sm={12} md={4} className='about__icon-col'>
            <FontAwesomeIcon icon={faReact} className='about__icon' />
            <span className='about__icon-name'>React</span>
          </Col>
          <Col sm={12} md={4} className='about__icon-col'>
            <FontAwesomeIcon icon={faJs} className='about__icon' />
            <span className='about__icon-name'>JavaScript</span>
          </Col>
          <Col sm={12} md={4} className='about__icon-col'>
            <FontAwesomeIcon icon={faHtml5} className='about__icon' />
            <span className='about__icon-name'>HTML</span>
          </Col>
          <Col sm={12} md={4} className='about__icon-col'>
            <FontAwesomeIcon icon={faCss3Alt} className='about__icon' />
            <span className='about__icon-name'>CSS</span>
          </Col>
          <Col sm={12} md={4} className='about__icon-col'>
            <FontAwesomeIcon icon={faSass} className='about__icon' />
            <span className='about__icon-name'>Sass</span>
          </Col>
          <Col sm={12} md={4} className='about__icon-col'>
            <FontAwesomeIcon icon={faBootstrap} className='about__icon' />
            <span className='about__icon-name'>Bootstrap</span>
          </Col>
          <Col sm={12} md={4} className='about__icon-col'>
            <FontAwesomeIcon icon={faGitAlt} className='about__icon' />
            <span className='about__icon-name'>Git</span>
          </Col>
          <Col sm={12} md={4} className='about__icon-col'>
            <FontAwesomeIcon icon={faNpm} className='about__icon' />
            <span className='about__icon-name'>npm</span>
          </Col>
          <Col sm={12} md={4} className='about__icon-col'>
            <FontAwesomeIcon icon={faYarn} className='about__icon' />
            <span className='about__icon-name'>Yarn</span>
          </Col>
          <Col sm={12} md={4} className='about__icon-col'>
            <FontAwesomeIcon icon={faJira} className='about__icon' />
            <span className='about__icon-name'>Jira</span>
          </Col>
          <Col sm={12} md={4} className='about__icon-col'>
            <FontAwesomeIcon icon={faSlack} className='about__icon' />
            <span className='about__icon-name'>Slack</span>
          </Col>
          <Col sm={12} md={4} className='about__icon-col'>
            <FontAwesomeIcon icon={faFileImage} className='about__icon' />
            <span className='about__icon-name'>CorelDRAW, Inkscape</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
