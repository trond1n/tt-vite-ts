import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className='header'>
         <nav className='navigation'>
          <ul>
            <li>
              <Link to="/">На главную</Link>
            </li>
            <li>
              <Link to="/about-tea">О чае</Link>
            </li>
            <li>
              <Link to="/timer">Таймер</Link>
            </li>
          </ul>
        </nav>
        <div className="logo">🍵</div>
        <ul className="links">
          <li>IG</li>
          <li>TG</li>
        </ul>
    </div>
  );
}

export default Header;
