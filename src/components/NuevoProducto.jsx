import React, { useState } from "react";

/// dependencias de redux
import { useDispatch, useSelector } from "react-redux";

/* actions de redux */

import { CrearNuevoProducto } from "../actions/productosActions";
import { mostrarAlerta, ocultarAlerta } from "../actions/alertaActions";
/* ----------------------------------------------------  */ 

const NuevoProducto = ({history}) => {

  const dispatch = useDispatch();
  
  const agregarProducto = producto => dispatch(CrearNuevoProducto(producto, history));

  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState("");

  // con useSelector podemos acceder al state de la store

  const cargando = useSelector(state =>  state.stateProductos.loading) 
  const alerta = useSelector(state => state.alerta.alerta)

  console.log(alerta)


  const setNuevoProducto = (e) => {
    e.preventDefault();

    //validar formulario
    //Buscar errores

    if (nombre.trim() === "" || precio.trim() === "" || precio <= 0) {

      const alertaError = {
          msg: 'ambos campos son obligatorios',
          clases: 'alert alert-danger text-center text-uppercase p3'
      }
      dispatch(mostrarAlerta(alertaError))

      return;

    }


    dispatch(ocultarAlerta())

    //Crear nuevo producto
    agregarProducto({
      nombre,
      precio
    });

   
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            {alerta ? <p className={alerta.clases}>{alerta.msg}</p> : null}
            <form onSubmit={setNuevoProducto}>
              <div className="form-group">
                <label>Nombre producto:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => guardarNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio producto:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => guardarPrecio(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar producto
              </button>
            </form>

            {cargando ? <p>Cargando...</p> : null}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
