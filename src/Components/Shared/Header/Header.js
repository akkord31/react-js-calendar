import React from "react";
import {Link} from "react-router-dom";

import './Header.css'

export default function Header(props){
  return(
    <header className="header">
      <div className="header__content">
        <h1>📅Personal calendar</h1>
        <nav className="nav__content">
          <ul>
          {props.isLoged ?  
            <li className="nav__content__item"><Link to="/">Main</Link></li> 
          :  <><li className="nav__content__item"><Link to="/register">Sign up</Link></li>
              <li className="nav__content__item"><Link to="/login">Sign in</Link></li></>}
              
           
          </ul>
        </nav>
      </div>
    </header>
  );
}
