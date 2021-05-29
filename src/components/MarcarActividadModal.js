import React from 'react';

import Modal from './Modal';

function MarcarActividadModal(props) {
    
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="EliminarActividadModal">
        <h1>Estas Seguro?</h1>
        <p>Marcaras la actividad como realizada</p>

        <div>
          <button onClick={props.onMarcarActividad} className="btn btn-danger mr-4">
            Marcar
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default MarcarActividadModal;
