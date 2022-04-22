import React from 'react'
import './navbar.css'
import {  Link} from 'react-router-dom'
import Logo from '../Imagenes/logo.png'

const Navbar = () => {
  return (
    <>
        <div className='container'>
            <img className='logo-company' src={Logo} alt="logocompany" />
            <Link className='links' to='/' >Home</Link>
            <Link className='links' to='/servicios' >Servicios</Link>
            <Link className='links' to='/nosotros' >Nosotros</Link>
            <Link className='links' to='/contacto' >Contactanos</Link>
        </div>
    </>
  )
}

export default Navbar