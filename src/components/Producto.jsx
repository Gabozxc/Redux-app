import React from "react";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

///redux

import { useDispatch } from "react-redux";
import { EliminarProducto, editarProducto } from "../actions/productosActions";

const Producto = ({ producto }) => {

const {id, nombre, precio} = producto

const dispatch = useDispatch();


  ///confirmar eliminada

  const confirmarEliminarProducto = (id) => {


      //Preguntar al usuario y pasar al action

      Swal.fire({
            title: 'Estas seguro?',
            text: "Producto eliminado no se recupera!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!',
            cancelButtonText:'cancelar'
          }).then((result) => {
            if (result.value) {
                  dispatch(EliminarProducto(id))
           
            }
          })
  };

  const history = useHistory()
  
  const redireccionarEdicicon = producto => {

    history.push(`/productos/editar/${producto.id}`)

    dispatch(editarProducto(producto))

  }

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">{precio}</span>
      </td>
      <td className="acciones">
        <button type="button"  className="btn btn-primary mr-2" onClick={() => redireccionarEdicicon(producto)}>
          Editar
        </button>
        <button
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
