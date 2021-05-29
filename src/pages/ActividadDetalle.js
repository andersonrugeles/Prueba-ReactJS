import React from 'react';
import { Link } from 'react-router-dom';

import './styles/actividadDetalle.css';
import Actividad from '../components/Actividad';
import EliminarActividadModal from '../components/EliminarActividadModal';
import Navbar from '../components/Navbar';
import MarcarActividadModal from '../components/MarcarActividadModal';

function ActividadDetalle(props) {
  const actividad = props.actividad;

  return (
    <div>
   <Navbar/>
      <div className="container container-detalle">
        <div className="row">
          <div className="col">
            <Actividad
              Nombre={actividad.Nombre}
              Descripcion={actividad.Descripcion}
              Frase={actividad.Frase}
             
            />
          </div>
          <div className="col">
            <h2>Acciones</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/actividades/${actividad.id}/editar`}
                >
                  Editar
                </Link>
              </div>
              <div>
              <button onClick={props.onOpenModalMarcar} className="btn btn-danger mb-4">
                  Realizada
                </button>
                <MarcarActividadModal
                  isOpen={props.ModalisOpenMarcar}
                  onClose={props.onCloseModalMarcar}
                  onMarcarActividad={props.onMarcarActividad}
                />
              </div>

              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Eliminar
                </button>
              <EliminarActividadModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteActividad={props.onDeleteActividad}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActividadDetalle;
