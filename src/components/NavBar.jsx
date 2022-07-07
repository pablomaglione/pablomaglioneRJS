import React from "react";
import imgLogo from "../assets/img/logo_size.png"
import CartWidget from "./CartWidget";

const NavBar = (props) => {
  console.log(props);
  return (
    <header>     
      <nav className="navbar navbar-expand-sm bg-light">
      <div>
        <a href="#">
          <img width="100" src={imgLogo} alt="logo" />
        </a>
      </div>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              <a className="nav-link" href="#">Relojes</a>
              <a className="nav-link" href="#">Joyas</a>
              <a className="nav-link" href="#">Alianzas</a>
            </div>
          </div>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;