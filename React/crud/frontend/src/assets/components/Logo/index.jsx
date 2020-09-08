import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import logo from '../../images/logo.png';

export default () => {
  return(
    <aside className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="logo.png"/>
      </Link>
    </aside>
  );
}