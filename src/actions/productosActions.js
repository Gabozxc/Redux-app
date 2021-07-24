import {
      AGREGAR_PRODUCTO,
      AGREGAR_PRODUCTO_EXITO,
      AGREGAR_PRODUCTO_ERROR,
      COMENZAR_DESCARGA_PRODUCTOS,
      DESCARGA_PRODUCTOS_EXITO,
      DESCARGA_PRODUCTOS_ERROR,
      PRODUCTO_ELIMINAR,
      PRODUCTO_ELIMINADO_EXITO,
      PRODUCTO_ELIMINADO_ERROR,
      PRODUCTO_EDITADO_ELEGIDO,
      EDITANDO_PRODUCTO_EXITOSO,
      ERROR_EDICION_PRODUCTO,
      COMENZAR_EDICION_PRODUCTO,
    
    } from "../types/index";

    import clienteAxios from "../config/axios"
    import Swal from "sweetalert2";
    
export function CrearNuevoProducto(producto, history){

      return async (dispatch) => {
                  dispatch(agregarProducto())

            try{
                  await clienteAxios.post('/productos', producto)
                  dispatch(agregarProductoExito(producto))

                  Swal.fire(
                        'correcto',
                        'El producto se pudo agregar correctamente',
                        'success'
                  )

                   history.push('/')
            }
            catch(error){
                  console.log(error)
                  dispatch(errorAgregarProducto(true))

                  Swal.fire({

                        icon: 'error',
                        tittle: 'hubo un error',
                        text: 'hubo un error, intenta de nuevo'

                  })
            }

      }

}

const agregarProducto = () =>({

      type: AGREGAR_PRODUCTO,
      payload: true
      
})

const agregarProductoExito = producto => ({

      type: AGREGAR_PRODUCTO_EXITO,
      payload: producto


})

const errorAgregarProducto = error => ({

      type: AGREGAR_PRODUCTO_ERROR,
      payload: error

})

export function obtenerProductos(){

      return async (dispatch) =>{

            dispatch(descargarProductos())

            try{
                  const respuesta = await clienteAxios.get('/productos')
                  dispatch(descargarProductosExitosa(respuesta.data))
            } catch(error){
                  dispatch(descargarProductosError())

            }
           



      }


}

const descargarProductos = () => ({
      type: COMENZAR_DESCARGA_PRODUCTOS,
      payload: true
})

const descargarProductosExitosa = productos => ({

      type: DESCARGA_PRODUCTOS_EXITO,
      payload: productos

})

const descargarProductosError = () =>  ({

      type: DESCARGA_PRODUCTOS_ERROR,
      payload: true

})


export function EliminarProducto(id){
      return async dispatch => {
            dispatch(obtenerProductosEliminar(id))

            try{
                   await clienteAxios.delete(`/productos/${id}`)

                  dispatch(eliminarProductoExito())

                  Swal.fire(
                        'Eliminado!',
                        'Se pudo eliminar para simpre.',
                        'success'
                      )
                      
            }
            catch(error){
                  dispatch(errorEliminarProducto)
            }

      }
}


const obtenerProductosEliminar = (id) => ({

      type:PRODUCTO_ELIMINAR,
      payload: id

})

const eliminarProductoExito = () => ({

      type: PRODUCTO_ELIMINADO_EXITO 

})



const errorEliminarProducto = () => ({

      type: PRODUCTO_ELIMINADO_ERROR 

})

//seleccionar un producto para editar
export function editarProducto(producto){

            return async dispatch => {     
                  dispatch(marcarProductoAEditar(producto))
            }
}


const marcarProductoAEditar = producto => ({

      type: PRODUCTO_EDITADO_ELEGIDO,
      payload: producto


})


//Editar  un producto en la API y state

export function editarProductoAction(productoNuevo){

      return async dispatch => {
            dispatch(modificarProducto())

            try {
                   await clienteAxios.put(`productos/${productoNuevo.id}`, productoNuevo)

                  dispatch(editarProductoExito(productoNuevo))
            }
            catch(error){
                        dispatch(errorProducto())
            }
      }
}


const modificarProducto = () => ({

      type: COMENZAR_EDICION_PRODUCTO
  

})


const editarProductoExito = productoNuevo => ({

      type: EDITANDO_PRODUCTO_EXITOSO,
      payload: productoNuevo

})


const errorProducto = () => ({
      type: ERROR_EDICION_PRODUCTO,
      payload:true
})