import React from 'react';

const MenuLeft = () => {
    return ( <>
  <nav className="navbar navbar-expand-mg navbar-dark bg-dark flex-column position-fixed" style={{height:100 + '%'}}>
  <div className="" id="navbarColor02">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">1ere visite </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"> Adaptation</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Patients en social</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Patients appareilles</a>
      </li>
    </ul>
    </div>
  <div className="" id="navbarColor02">
    <ul className="navbar-nav ml-0 pl-0">
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
    </ul>
    </div>
</nav>
</>);
}
 
export default MenuLeft;