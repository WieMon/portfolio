import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/layout/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openHeader: false,
      closeHeader: false,
    };
  }

  handleOpenHeader = () => {
    this.setState({openHeader: !this.state.openHeader});
  }

  handleCloseHeader = () => {
    setTimeout(() => {
      this.setState({
        closeHeader: !this.state.closeHeader,
        openHeader: !this.state.openHeader,
      });}, 800);
  }

  render() {
    const list = [
      {name: 'About me', path:'/', exact: true},
      {name: 'Portfolio', path:'/portfolio'},
      {name: 'Contact', path:'/contact'},
    ];

    const menu = list.map(item => (
      <li key={item.name} className='header__item' >
        <NavLink to={item.path} exact={item.exact ? item.exact : false} className='header__link' onClick={this.handleCloseHeader}>
          {item.name}
        </NavLink>
      </li>
    ));

    return (
      <header className='header'>
        <Container className='p-0 m-0' fluid>
          <Row className='p-0 m-0'>
            <Col xs={9} sm={8} md={5} lg={4} className='d-block p-0'>
              <div className='header__name-div'>
                <h2 className='header__name'>Monika Wieczorek</h2>
              </div>
            </Col>
            <Col xs={3} sm={4} className='d-block d-md-none p-0 header__hamburger-col'>
              <div className='header__hamburger-div' onClick={this.handleOpenHeader}>
                <FontAwesomeIcon className='header__hamburger' icon={faBars} />
              </div>
            </Col>
            <Col md={7} lg={8} className={!this.state.openHeader  ? 'd-none d-md-block p-0' : 'd-block p-0'}>
              <ul className='header__list' >
                {menu}
              </ul>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
