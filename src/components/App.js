import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Inicio from '../pages/Inicio';
import Actividades from '../pages/Actividades';
import NuevaActividad from '../pages/NuevaActividad';
import ActividadDetalleContainer from '../pages/ActividadDetalleContainer';
import ActividadEditar from '../pages/ActividadEditar';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/actividades" component={Actividades} />
          <Route exact path="/actividad/nueva" component={NuevaActividad} />
          <Route exact path="/actividades/:actividadId" component={ActividadDetalleContainer} />
          <Route exact path="/actividades/:actividadId/editar" component={ActividadEditar} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
