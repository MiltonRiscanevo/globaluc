import React from 'react'
import Fondo from '../Video/fondo.mp4'
import './home.css'
const Home = () => {
  return (
    <div>
        <video autoPlay loop muted className='video'>
            <source src={Fondo} type='video/mp4' />
        </video>
        <div className='title'>
            NECESITAS UN ALIADO NO UN PROVEEDOR
        </div>
    </div>
  )
}

export default Home