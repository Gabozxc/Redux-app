import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.jsx";
import Productos from "./components/Productos.jsx";
import NuevoProducto from "./components/NuevoProducto.jsx";
import EditarProductoComponent from "./components/EditarProducto.jsx";

//redux

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route
              exact
              path="/productos/editar/:id"
              component={EditarProductoComponent}
            />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
};

export default App;
