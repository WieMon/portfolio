import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/pages/About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import corel from '../images/corel.svg';

const About = () => {
  return (
    <div className='about'>
      <Container className='p-4'>
        <Row className='p-4 about__text-row'>
          <Col className='p-2'>
            <p >
              <span className='about__text-span'>Welcome</span>
            </p>
            <p>
              My name is Monika and I am looking for a position of junior front-end developer.
            </p>
            <p>
              My first experience with programming and visualization of complex data was during my PhD. I was using statistical and graphical packages of <span className='about__text-span'>R</span> and <span className='about__text-span'>CorelDraw</span> to show large datasets as audience-friendly presentations.
            </p>
            <p>
              Then, I have started working in fast-paced environment of large corporations. Ever since then effective multitasking and cross-cultural communication in <span className='about__text-span'>English</span> or, occasionally, in <span className='about__text-span'>German</span> have become my daily routine.
            </p>
            <p>
              However, I am passionate about learning new things and have been missing tasks requiring analytical thinking and problem solving.
            </p>
            <p>
              Therefore, at the beginning of 2019 I have started learning web development through a several-month long bootcamp (<span className='about__text-span'>
              Kodilla</span>), the online and face-to-face courses (<span className='about__text-span'>Udemy</span>, <span className='about__text-span'>Stacja IT</span>), and on my own.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <p className='about__text-skills'>
              <span className='about__text-skills-span'>My skills so far ...</span>
            </p>
          </Col>
        </Row>
        <Row className='p-0 about__skills-row'>
          <Col xl={12}>
            <p className='about__skills'>
            Languages and libraries
            </p>
          </Col>
          <Col sm={12} md={4} className='p-4 about__skills-col'>
            <FontAwesomeIcon icon={faHtml5} className='about__icon' />
            <span className='about__icon-span'>HTML</span>
          </Col>
          <Col sm={12} md={4} className='p-4 about__skills-col'>
            <FontAwesomeIcon icon={faCss3Alt} className='about__icon' />
            <span className='about__icon-span'>CSS</span>
          </Col>
          <Col sm={12} md={4} className='p-4 about__skills-col'>
            <FontAwesomeIcon icon={faSass} className='about__icon' />
            <span className='about__icon-span'>Sass</span>
          </Col>
          <Col sm={12} md={4} className='p-4 about__skills-col'>
            <FontAwesomeIcon icon={faJs} className='about__icon' />
            <span className='about__icon-span'>JavaScript</span>
          </Col>
          <Col sm={12} md={4} className='p-4 about__skills-col'>
            <FontAwesomeIcon icon={faReact} className='about__icon' />
            <span className='about__icon-span'>React</span>
          </Col>
          <Col sm={12} md={4} className='p-4 about__skills-col'>
            <FontAwesomeIcon icon={faBootstrap} className='about__icon' />
            <span className='about__icon-span'>Bootstrap</span>
          </Col>
        </Row>
        <Row className='p-0 about__skills-row'>
          <Col xl={12}>
            <p className='about__skills'>
            Tools
            </p>
          </Col>
          <Col sm={12} md={4} className='p-4 about__skills-col'>
            <FontAwesomeIcon icon={faGitAlt} className='about__icon' />
            <span className='about__icon-span'>Git</span>
          </Col>
          <Col sm={12} md={4} className='p-4 about__skills-col'>
            <FontAwesomeIcon icon={faNpm} className='about__icon' />
            <span className='about__icon-span'>npm</span>
          </Col>
          <Col sm={12} md={4} className='p-4 about__skills-col'>
            <FontAwesomeIcon icon={faYarn} className='about__icon' />
            <span className='about__icon-span'>Yarn</span>
          </Col>
          <Col sm={12} md={4} className='p-4 about__skills-col'>
            <FontAwesomeIcon icon={faJira} className='about__icon' />
            <span className='about__icon-span'>Jira</span>
          </Col>
          <Col sm={12} md={4} className='p-4 about__skills-col'>
            <FontAwesomeIcon icon={faSlack} className='about__icon' />
            <span className='about__icon-span'>Slack</span>
          </Col>
          <Col sm={12} md={4} className='p-4 about__skills-col'>
            <img src={corel} alt='Corel logo' className='about__icon' />
            <span className='about__icon-span'>CorelDRAW, Inkscape</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
