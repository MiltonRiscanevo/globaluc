import React from 'react'
import Instalations1 from '../../../Imagenes/infraestructura.png'
import './instalations.css'
const Instalations = () => {
  return (
    <div className='container'>
      <img className='image' src={Instalations1} alt="" />
      <p className='parrafo'>
      Sabemos que lo mas importante dentro de tu informacion corporativa es tus datos, y quepara ellos Siempre
      requieres de una infraestructura que sea idonea, nosotros no solo hacemos la instalacion de tu
      infraestructura, sino que te asesoramos para evitar costos ocultos que hagan perder rentabilidad
      a tu inversion ya sea a mediano o largo plazo
      </p>
      
    </div>
  )
}

export default Instalations
