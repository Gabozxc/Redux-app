import {combineReducers} from 'redux'
import productosReducer from './productosReducer'
import alertaReducer from './alertaReducer'

export default combineReducers({

      stateProductos: productosReducer,
      alerta: alertaReducer

})