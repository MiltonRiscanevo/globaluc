import React from 'react'
import Mantenimiento from '../../../Imagenes/mantenimiento.jpg'
import './maintance.css'
const Maintance = () => {
  return (
    <div className='container'>
      <p className='parrafo'>
        Todos los equipos merecen un buen trato, porque esto es un activo importante de tu empresa
        nuestro servicio calificado, con tecnicos certificados te dara ese plus que necesitas, realizando
        mantenimientos preventivos o correctivos, que ayuden a optimizar tu infraestructura tecnologica,
         al igual que asesorandote en los cambios que genere la revolucion digital en la cual estamos viviendo
      </p>
      <img className='image' src={Mantenimiento} alt="maintance" />
      
    </div>
  )
}

export default Maintance