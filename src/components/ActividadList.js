import React from 'react';
import { Link } from 'react-router-dom';

import './styles/ActividadList.css';


class ActividadListItem extends React.Component {
  render() {
    return (
      <div className="ActividadListItem">
  

        <div>
          <strong>
            {this.props.actividades.Nombre}
          </strong>
          <br />{this.props.actividades.Descripcion}
          <br />
          {this.props.actividades.Frase}
        </div>
      </div>
    );
  }
}

function useSearchActividades(actividades) {
  const [query, setQuery] = React.useState('');
  const [filteredActividades, setFilteredBadges] = React.useState(actividades);

  React.useMemo(() => {
    const result = actividades.filter(actividades => {
      return `${actividades.Nombre} ${actividades.Descripcion}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [actividades, query]);

  return { query, setQuery, filteredActividades };
}

function ActividadList(props) {
  const actividades = props.actividades;

  const { query, setQuery, filteredActividades } = useSearchActividades(actividades);

  if (filteredActividades.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Buscar Actividad</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No hemos encontrado ninguna actividad</h3>
        <Link className="btn btn-primary" to="/actividad/nueva">
          Crear Nueva Actividad
        </Link>
      </div>
    );
  }

  return (
    <div className="ActividadList">
      <div className="form-group">
        <label>Buscar Actividad</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredActividades.map(actividades => {
          return (
            <li key={actividades.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/actividades/${actividades.id}`}
              >
                <ActividadListItem actividades={actividades} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ActividadList;
