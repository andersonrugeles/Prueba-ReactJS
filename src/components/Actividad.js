import React from 'react';

import './styles/Actividad.css';

class Actividad extends React.Component {
  render() {
    return (
      <div className="Actividad">
        <div className="Actividad__header">
          <h1>Actividad</h1>
        </div>

        <div className="Actividad__section-name">
         
          <h1>
            {this.props.Nombre}
          </h1>
        </div>

        <div className="Actividad__section-info">
          <h3>{this.props.Descripcion}</h3>
          <div>{this.props.Frase}</div>
        </div>

      </div>
    );
  }
}

export default Actividad;
