import React from 'react';

const MenuLeft = () => {
    return ( <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-column position-fixed" style={{height:100 + '%'}}>
  <div className=" mr-auto" id="navbarColor02" >
    <ul className="navbar-nav flex-column">
      <li className="nav-item active">
        <button className="btn btn-secondary mt-2 active btn-block">
        <a className="nav-link" href="#">1ere visite </a>
        </button>
      </li>
      <li className="nav-item">
      <button className="btn btn-secondary mt-2 btn-block">
        <a className="nav-link" href="#"> Adaptation</a>
        </button>
      </li>
      <li className="nav-item">
      <button className="btn btn-secondary mt-2 btn-block">
        <a className="nav-link" href="#">Patients en social</a>
        </button>
      </li>
      <li className="nav-item">
      <button className="btn btn-secondary mt-2 btn-block">
        <a className="nav-link" href="#">Patients appareillés</a>
        </button>
      </li>
    </ul>
    </div>
    <div className="mt-5" id="navbarColor02" >
    <ul className="navbar-nav flex-column mt-5 mr-auto">
      <li className="nav-item active">
      <button className="btn btn-secondary mt-2 btn-block">
        <a className="nav-link" href="#"> Relance </a>
        </button>
      </li>
      <li className="nav-item">
      <button className="btn btn-secondary mt-2 btn-block">
        <a className="nav-link" href="#"> Statistiques</a>
        </button>
      </li>

    </ul>
    </div>
</nav>
</>);
}
 
export default MenuLeft;

/**
 * <div className="" id="navbarColor02">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Relance </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Statistiques</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
    </ul>
    </div>
 */