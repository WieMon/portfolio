import React from 'react';
import '../styles/layout/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__list'>
        <li className='footer__item'>
          <a
            href='https://github.com/WieMon'
            className='footer__link'
            rel='noopener noreferrer'
            target='_blank'>
            <FontAwesomeIcon className='footer__icon' icon={faGithub} />
          </a>
        </li>
        <li className='footer__item'>
          <a
            href='https://www.linkedin.com/in/wieczorekmonika'
            className='footer__link'
            rel='noopener noreferrer'
            target='_blank'>
            <FontAwesomeIcon className='footer__icon' icon={faLinkedin} />
          </a>
        </li>
        <li className='footer__item'>
          <a
            href='mailto:monikawieczoreq@gmail.com' className='footer__link'
            rel='noopener noreferrer'
            target='_blank'>
            <FontAwesomeIcon className='footer__icon' icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

