import React from 'react'
import HelpDesk1 from '../../../Imagenes/HelpDesk.png'
import './helpDesk.css'

const HelpDesk = () => {
  return (
    <div className='container'>
       <img className='image' src={HelpDesk1} alt="" /> 
      <p className='parrafo'>
        Siempre que necesites de nosotros, tenemos un equipo altamente calificado que te permitira recibir
      soporte especializado de manera inmediata, que resuelva ya sea de manera presencial o remota, cada
      problema que se presente durante la ejecucion de tus labores
      </p>
    </div>
  )
}

export default HelpDesk