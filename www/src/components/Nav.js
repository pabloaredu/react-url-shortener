import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'> Home </Link> </li>
        <li><Link to='/users'> Users </Link> </li>
        <li><Link to='/links'> Links </Link> </li>
      </ul>
    </nav>
  </header>
)

export default Nav;