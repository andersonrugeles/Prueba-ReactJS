import React from 'react';

import Modal from './Modal';

function EliminarActividadModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="EliminarActividadModal">
        <h1>Estas seguro?</h1>
        <p>Eliminar la actividad.</p>

        <div>
          <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
            Eliminar
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default EliminarActividadModal;
