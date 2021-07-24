import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {editarProductoAction} from '../actions/productosActions'

const EditarProductoComponent = () => {

  const history = useHistory()
  const producto = useSelector(state => state.stateProductos.productoEditar)
  const dispatch = useDispatch()

  const [productoNuevo, setProductoNuevo] = useState({
        nombre: '',
        precio: ''
  })


  useEffect(() => {

    setProductoNuevo(producto)

  }, [producto])

  if(!producto) return null
  
  
  const {nombre, precio} = productoNuevo
 
  const onChanfeFormulario = e => {

    setProductoNuevo({
      ...productoNuevo,
        [e.target.name] : e.target.value
    })


  }



const EditarProducto = productoNuevo =>{

  dispatch(editarProductoAction(productoNuevo))
  history.push('/')

}

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar producto
            </h2>
            <form onSubmit={() => EditarProducto(productoNuevo)}>
              <div className="form-group">
                <label>Nombre producto:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChanfeFormulario}
                  
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
                  onChange={onChanfeFormulario}
                  
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProductoComponent;
