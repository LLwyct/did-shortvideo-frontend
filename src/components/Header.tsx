import * as React from 'react';
import {Link} from 'react-router-dom';
import './Header.style.scss';

interface IHeaderProps {
    colorMode?: "default" | "light"
}

const Header = (props: IHeaderProps) => {
    let colorMode = "";
    if (props.colorMode && props.colorMode === "light") {
        colorMode = "header-light";
    }

    return (
      <header className={`App-header ${colorMode}`}>
        <div className="golbal__container">
          <div className="App-header-in">
            <div className="header-links">
              <Link to="/">Home</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">singup</Link>
            </div>
            <div className="header-brand">
              <span>DSV | TRUST CENTER</span>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;