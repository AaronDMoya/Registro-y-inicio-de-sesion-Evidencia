import React, { useState } from 'react'
import axios from 'axios';

export const ComponentRegister = () => {
    // Estados para el usuario, contraseña y mensaje de respuesta
    const [correoElectronico, setCorreoElectronico] = useState ('');
    const [contraseña, setContraseña] = useState ('');

  // Función que se ejecuta cuando se envía el formulario de registro
    const handleRegistro = async (e) => {
        // Evita que el formulario recargue la página
        e.preventDefault();
        try {
        // Enviar datos al backend mediante una solicitud POST
        const response = await axios.post('http://localhost:5023/registro', {correoElectronico,contraseña,});
        // Guardar mensaje de éxito en el estado 'mensaje'
        alert(response.data.mensaje);
        } catch (error) {
        // Muestra el error detallado para depuración
        if (error.response) {
            // Error del servidor (por ejemplo, 400)
            console.error(error.response.data);
            alert(error.response.data.error || 'Error en el registro');
        } else if (error.request) {
            // Error en la solicitud 
            console.error(error.request);
            alert('No se pudo realizar la solicitud');
        } else {
            // Otro tipo de error
            console.error('Error', error.message);
            alert('Error en el registro');
        }
    }
    }; return (
    <>
        <div className='Contenedor'>
            <p className='Seccion'>Registrate</p>
            <form onSubmit={handleRegistro}>
                <label>Correo electronico</label>
                <input 
                type="email"
                placeholder='Correo electronico'
                value={correoElectronico}
                onChange={(e) => setCorreoElectronico(e.target.value)}
                required
                />
                <label>Contraseña</label>
                <input
                type="password"
                placeholder='Contraseña'
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                required
                />
                <button>Registrate</button>
            </form>
        </div>
    </>
    )
}

export default ComponentRegister;