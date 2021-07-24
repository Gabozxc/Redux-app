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

/*Cada reducer tiene su propio state */

const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoEliminar: null,
  productoEditar: null,
};

export default function (state = initialState, action) {

  switch (action.type) {

      case AGREGAR_PRODUCTO:
          return {
              ...state,
              loading: action.payload
          }
      case AGREGAR_PRODUCTO_EXITO:
        return {
              ...state,
              loading: false,
              error: null,
              productos:[...state.productos, action.payload]
        }
      case  ERROR_EDICION_PRODUCTO:
      case AGREGAR_PRODUCTO_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload
        }   

      case COMENZAR_DESCARGA_PRODUCTOS: 
        return {
          ...state,
          loading:action.payload,
          
        }
      case DESCARGA_PRODUCTOS_EXITO:
        return{
          ...state,
          loading: false,
          error:null,
          productos:action.payload
        }  
      case DESCARGA_PRODUCTOS_ERROR:   
        return {
            ...state,
            loading: false,
            error: action.payload
          }
          case PRODUCTO_ELIMINADO_ERROR:   
        return {
            ...state,
            loading: false,
            error: action.payload
          }  
      case PRODUCTO_ELIMINAR:
          return {
            ...state,
            productoEliminar: action.payload
          }   
     case PRODUCTO_ELIMINADO_EXITO:
          return{
            ...state,
            productos: state.productos.filter(producto => producto.id !== state.productoEliminar),
            productoEliminar: null
          }      

    case PRODUCTO_EDITADO_ELEGIDO: 
          return {
            ...state,
            productoEditar: action.payload
          }
    case COMENZAR_EDICION_PRODUCTO:
          return {
            ...state,
            
          }
      
    case EDITANDO_PRODUCTO_EXITOSO:
        return {
          ...state,
          productoEditar:null,
          productos: state.productos.map(producto => 

            producto.id === action.payload.id ? producto = action.payload : producto
        
        )
          
        }


    default:
      return state;
  }

}
