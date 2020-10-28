import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/pages/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='contact'>
      <Container>
        <Row>
          <Col sm={12} md={6} className='contact__icon-col'>
            <a
              href='https://github.com/WieMon'
              className='contact__link'
              rel='noopener noreferrer'
              target='_blank'>
              <FontAwesomeIcon icon={faGithub} className='contact__icon' />
              <span className='contact__icon-name'>Github</span>
            </a>
          </Col>
          <Col sm={12} md={6} className='contact__icon-col'>
            <a
              href='https://www.linkedin.com/in/wieczorekmonika'
              className='contact__link'
              rel='noopener noreferrer'
              target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} className='contact__icon' />
              <span className='contact__icon-name'>Linkedin</span>
            </a>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} className='contact__icon-col'>
            <a
              href='https://drive.google.com/file/d/1E9ZgoflWZQJ6Ig0OX5NMJ7_J0lMVIB3v/view?usp=sharing'
              className='contact__link'
              rel='noopener noreferrer'
              target='_blank'>
              <FontAwesomeIcon icon={faFile} className='contact__icon' />
              <span className='contact__icon-name'>CV</span>
            </a>
          </Col>
          <Col sm={12} md={6} className='contact__icon-col'>
            <a
              href='mailto:monikawieczoreq@gmail.com'
              className='contact__link'
              rel='noopener noreferrer'
              target='_blank'>
              <FontAwesomeIcon icon={faEnvelope} className='contact__icon' />
              <span className='contact__icon-name'>monikawieczoreq@gmail.com</span>
            </a>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Contact;
