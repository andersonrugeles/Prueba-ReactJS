import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Inicio.css';


export default class Inicio extends Component {
  render() {
    return (
      <div className="Inicio">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
            

              <h1>Lista To-Do</h1>
              <Link className="btn btn-primary" to="/actividades">
                Ingresar
              </Link>
            </div>

          
          </div>
        </div>
      </div>
    );
  }
}
