import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Actividades.css';
import ActividadList from '../components/ActividadList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import api from '../api';
import Navbar from '../components/Navbar';

class Actividades extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.actividades.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <Navbar />
        <div className="Actividades__container">
          <div className="Actividades__buttons">
            <Link to="/actividad/nueva" className="btn btn-primary">
              Crear Actividad
            </Link>
          </div>

          <ActividadList actividades={this.state.data} />

          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}

export default Actividades;
