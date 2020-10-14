import React from 'react';
import './header.scss';
import {Link,NavLink} from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <h1>RESTy</h1>
      <nav className='nav'>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
            <li>
              <NavLink to="/history" >History</NavLink>
            </li>
            <li>
              <NavLink to="/help" >Help</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;