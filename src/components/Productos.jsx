import React, {Fragment, useEffect} from 'react'
import Producto from './Producto.jsx'

//redux

import {useSelector, useDispatch} from 'react-redux'
import {obtenerProductos } from '../actions/productosActions'


const Productos = () => {

      const dispatch = useDispatch()
      const productos = useSelector(state => state.stateProductos.productos)
      const error = useSelector(state => state.stateProductos.error)
      const cargando = useSelector(state => state.stateProductos.loading)
      
      useEffect(() => {

            //consultar la api
            const cargarProductos = () => dispatch(obtenerProductos())

            cargarProductos()

      }, [dispatch])

      //obtener el state



      return ( <Fragment>
            <h2 className="text-center my-4 ">Listado de productos</h2>
            {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null}
            {cargando ? <p className="text-center">Cargando</p> : null}
            <table className="table table-striped">
                  <thead className="bg-primary table-dark">
                        <tr>
                              <th scope="col">Nombre</th>
                              <th scope="col">Precio</th>
                              <th scope="col">Acciones</th>
                        </tr>
                  </thead>
                 
                  <tbody>
                        {productos === 0 ? <p>no hay productos</p> : 
                              productos.map(producto => ( 

                                         <Producto 
                                               key={producto.id}
                                               producto={producto}
                                         />
                                                
                              ))
                        }
                  </tbody>
            </table>
      </Fragment> );
}
 
export default Productos;