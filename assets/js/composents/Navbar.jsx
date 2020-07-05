import React from "react";
import Img from "../img/logo-medecin.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            alt="AudioWizard solution saas pour audioprothésistes gestion et suivi patient santé"
            src={Img}
            id="navbar-logo"
            style={{ height: 30 + "px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown"></li>
          </ul>
          <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
              Thomas
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
