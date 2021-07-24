import {
      MOSTRAR_ALERTA,
      OCULTAR_ALERTA
}from '../types'



export function mostrarAlerta(alerta){

      return  dispatch => {
            dispatch(Alerta(alerta))

      }
}

const Alerta = alerta => ({

      type: MOSTRAR_ALERTA,
      payload: alerta


})


export function ocultarAlerta(){

      return  dispatch => {
            dispatch(alertaOculta())

      }
}


const alertaOculta = () =>({
            type: OCULTAR_ALERTA
})