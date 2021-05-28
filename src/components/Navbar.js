import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';


class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
        <div className="container">
          <div className="row ">
            <div className="col">
            <Link className="Navbar__brand" to="/">
            <span className="font-weight-bold">Inicio</span>
          </Link>
            </div>
            <div className="col">
            <Link className="Navbar__brand" to="/actividades">
          <span className="font-weight-bold">Actividades</span>
          </Link>
            </div>
          
          </div>
          </div>
       
     
         
        </div>
      </div>
    );
  }
}

export default Navbar;
