import * as React from 'react';
import {Link} from 'react-router-dom';
import './Header.style.scss';
import brand from "../assets/genesis-white-ellipse.png";


export interface IHeaderProps {
    colorMode?: "default" | "light" | "none"
}

const Header = (props: IHeaderProps) => {
  let colorMode = "";
  if (props.colorMode && props.colorMode === "light") {
      colorMode = "header-light";
  } else if (props.colorMode && props.colorMode === "none") {
      colorMode = "none";
  }
  const brandSrc = colorMode === "" ? brand : "";
  const [isLogin, setIslogin] = React.useState(false);
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      setIslogin(true);
      console.log(isLogin);
    }
  }, [isLogin])
  let LinkGroup;
  if (isLogin) {
    LinkGroup = (
      <>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/" onClick={() => {localStorage.removeItem("token");setIslogin(false);}}>Logout</Link>
      </>
    )
  } else {
    LinkGroup = (
      <>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">singup</Link>
        <Link to="/profile">Profile</Link>
      </>
    )
  }
    
  return (
    <header className={`App-header ${colorMode}`} style={colorMode === "none" ? {display: "none"}: {}}>
      <div className="golbal__container">
        <div className="App-header-in">
          <div className="header-links">
            {LinkGroup}
          </div>
          <div className="header-brand">
            <img src={brandSrc} alt="brand" className="homebrand" />
            <span>| TRUST CENTER</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;