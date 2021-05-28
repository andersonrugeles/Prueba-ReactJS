import React from 'react';

class ActividadForm extends React.Component {

  handleClick = e => {
    console.log('Button was clicked');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="Nombre"
              value={this.props.formValues.Nombre}
            />
          </div>

          <div className="form-group">
            <label>Descripcion</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text-area"
              name="Descripcion"
              value={this.props.formValues.Descripcion}
            />
          </div>

          <div className="form-group">
            <label>Frase</label>
            <select className="form-control" aria-label="Default select example" name="Frase" onChange={this.props.onChange}>
            {this.props.formFrases.map((item) =>
            <option value={item.breed}>{item.breed}</option>
            )}
          </select>
          </div>
       

          <button onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default ActividadForm;
