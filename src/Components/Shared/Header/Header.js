import React from "react";
import {Link} from "react-router-dom";

import './Header.css'

export default function Header(){
  return(
    <header className="header">
      <div className="header__content">
        <h1>📅Personal calendar</h1>
        <nav className="nav__content">
          <ul>
            <li className="nav__content__item"><Link to="/">Main</Link></li>
            <li className="nav__content__item"><Link to="../../Accounts/RegisterForm">Sign up</Link></li>
            <li className="nav__content__item"><Link to="../../Accounts/LoginForm">Sign in</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
