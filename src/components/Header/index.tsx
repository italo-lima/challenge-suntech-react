import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="SunTech" />
      </Link>

      <div>
        <Link to="/">Board</Link>
        <Link to="/map">Map</Link>
      </div>
    </Container>
  );
};

export default Header;
