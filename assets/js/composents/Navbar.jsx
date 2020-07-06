import React from "react";
import Img from "../img/logo-medecin.jpg";
import Dropdown from "react-bootstrap/Dropdown";

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
        <Dropdown title="dropdown" className="ml-auto">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Thomas Dutronc
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Mon profil</Dropdown.Item>
            <Dropdown.Item href="#">Mes visites</Dropdown.Item>
            <Dropdown.Item href="#">Deconnexion</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </>
  );
};

export default Navbar;
