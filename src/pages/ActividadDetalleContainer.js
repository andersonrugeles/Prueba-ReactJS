import React from 'react';

import ActividadDetalle from './ActividadDetalle';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

class ActividadDetalleContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
    ModalisOpenMarcar: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.actividades.read(this.props.match.params.actividadId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleonOpenModalMarcar = e => {
    this.setState({ ModalisOpenMarcar: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };
  handleCloseModalMarcar = e => {
    this.setState({ ModalisOpenMarcar: false });
  };

  handleDeleteActividad = async e => {
    this.setState({ loading: true, error: null });

    try {
      await api.actividades.remove(this.props.match.params.actividadId);
      this.setState({ loading: false });

      this.props.history.push('/actividades');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleMarcarActividad = async e => {
    this.setState({ loading: true, error: null });

    try {
      this.state.data.Realizada=true;
      await api.actividades.update(this.props.match.params.actividadId,this.state.data);
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

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <ActividadDetalle
        onCloseModal={this.handleCloseModal}
        onCloseModalMarcar={this.handleCloseModalMarcar}
        onOpenModal={this.handleOpenModal}
        onOpenModalMarcar={this.handleonOpenModalMarcar}
        modalIsOpen={this.state.modalIsOpen}
        ModalisOpenMarcar={this.state.ModalisOpenMarcar}
        onDeleteActividad={this.handleDeleteActividad}
        onMarcarActividad={this.handleMarcarActividad}
        actividad={this.state.data}
      />
    );
  }
}

export default ActividadDetalleContainer;
