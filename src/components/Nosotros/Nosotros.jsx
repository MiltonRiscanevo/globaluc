import React from 'react'
import Nosotros1 from '../Imagenes/Nosotros1.png'
import './nosotros.css'

const Nosotros = () => {
  return (
    <div className='container'> 
      <img className='image-nosotros' src={Nosotros1} alt="Nosotros1" />
      <p className='p-nosotros'>Mas que simplemente ser tu proveedor, somos tu aliado tecnologico, buscamos que no te preocupes
        por la gestion de tu infraestructura tecnologica, con nuestro talento humano, nosotros nos encargamos
        que esas areas de soporte que requieres sean eficientes, lo cual te libera para que puedas usar todo
        tu potencial de negocio en la actividad principal que te genera riqueza, y lo mejor lo hacemos a precios
        que son competitivos frentea nuestros competidores
      </p>
    </div>
  )
}

export default Nosotros