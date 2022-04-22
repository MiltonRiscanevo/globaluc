import React, {useRef} from 'react'
import './contacto.css'
import emailjs from '@emailjs/browser'

const Contacto = () => {

    const form = useRef()

    const sendEMail = (e)=>{
        e.preventDefault()
        emailjs.sendForm('service_n5lz5b9', 'template_1biffws', form.current,'76LI_5Po9yTymhgOo')
        .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert(`Enviaste el mensaje con exito pronto estaremos comunicandonos contigo ${response.status} ${response.text}`)
        }, function(error) {
       console.log('FAILED...', error);
        });
    }
  return (
    <div>
        <h3>Contactanos</h3>
        <form ref={form} onSubmit={sendEMail} >
            <label >Name</label>
            <input type="text" name='user_name' />
            <label >Email</label>
            <input type="email" name='user_email' />
            <label >Escribe tu mensaje, con gusto nos contactaremos</label>
            <textarea name='message'/>
            <input type="submit" value='Send'  />
        </form>
    </div>
  )
}

export default Contacto