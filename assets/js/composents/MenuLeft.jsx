import React from "react";

const MenuLeft = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg d-none d-md-block
        navbar-dark bg-dark flex-column position-fixed"
        style={{ height: 100 + "%" }}
      >
        <div className=" mr-auto" id="navbarColor02">
          <ul className="navbar-nav flex-column">
            <li className="nav-item active">
              <button className="btn btn-info mt-2 active btn-block">
                <a className="nav-link" href="#">
                  1ere visite{" "}
                </a>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-info mt-2 btn-block">
                <a className="nav-link" href="#">
                  {" "}
                  Adaptation
                </a>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-info mt-2 btn-block">
                <a className="nav-link" href="#">
                  Patients en social
                </a>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-info mt-2 btn-block">
                <a className="nav-link" href="#">
                  Patients appareillés
                </a>
              </button>
            </li>
          </ul>
        </div>
        <div className="mt-5 mb-auto" id="navbarColor02">
          <ul className="navbar-nav flex-column mt-5 ml-auto">
            <li className="nav-item active">
              <button className="btn btn-info mt-2 btn-block">
                <a className="nav-link" href="#">
                  {" "}
                  Relance{" "}
                </a>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-info mt-2 btn-block">
                <a className="nav-link" href="#">
                  {" "}
                  Statistiques
                </a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MenuLeft;
