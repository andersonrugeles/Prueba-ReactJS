import React from 'react';

import './styles/actividadNueva.css';
import ActividadForm from '../components/ActividadForm';
import PageLoading from '../components/PageLoading';
import api from '../api';
import Navbar from '../components/Navbar';
import Actividad from '../components/Actividad';
class NuevaActividad extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      Nombre: '',
      Descripcion: '',
      Frase: '',
     },
     frase:[]
    
  };
  componentDidMount(){
    this.obtener();

  }
  obtener=async()=> {
    const url='https://catfact.ninja/breeds';
    const response=await fetch(url);
    const responseJSON=await response.json();
    this.setState({frase:responseJSON.data});
  
    
  }
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.actividades.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/actividades');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <Navbar/>
        <div className="container container-actividad-nueva">
          <div className="row">
            <div className="col-6">
              <Actividad
                Nombre={this.state.form.Nombre}
                Descripcion={this.state.form.Descripcion }
                Frase={this.state.form.Frase}
                
              />
            </div>

            <div className="col-6">
              <h1>Crear Actividad</h1>
              <ActividadForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                formFrases={this.state.frase}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NuevaActividad;
