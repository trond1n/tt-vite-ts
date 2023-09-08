import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div>
         <nav>
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
    </div>
  );
}

export default Header;
