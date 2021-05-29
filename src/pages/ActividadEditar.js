import React from 'react';

import './styles/ActividadEditar.css';
import Actividad from '../components/Actividad';
import ActividadForm from '../components/ActividadForm';
import PageLoading from '../components/PageLoading';
import api from '../api';
import Navbar from '../components/Navbar';

class ActividadEditar extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      Nombre: '',
      Descripcion: '',
      Frase: '',
      Realizada:'',
     
    },
    frase:[]
  };

  componentDidMount() {
    this.fetchData();
    this.obtener();
  }

  obtener=async()=> {
    const url='https://catfact.ninja/breeds';
    const response=await fetch(url);
    const responseJSON=await response.json();
    this.setState({frase:responseJSON.data});
  
    
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.actividades.read(this.props.match.params.actividadId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

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
      await api.actividades.update(this.props.match.params.actividadId, this.state.form);
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
         <div className="container container-editar">
          <div className="row">
            <div className="col-6">
              <Actividad
                Nombre={this.state.form.Nombre}
                Descripcion={this.state.form.Descripcion}
                Frase={this.state.form.Frase}
              
                
              />
            </div>

            <div className="col-6">
              <h1>Editar Actividad</h1>
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

export default ActividadEditar;
