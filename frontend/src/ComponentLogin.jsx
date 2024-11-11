import React, { useState } from 'react'
import axios from 'axios';

export const ComponentLogin = () => {
    // Estados para el usuario, contraseña y mensaje de respuesta
    const [correoElectronico, setCorreoElectronico] = useState ('');
    const [contraseña, setContraseña] = useState ('');

    // Función para manejar el inicio de sesión
    const handleLogin = async (e) => {
        // Evita que el formulario recargue la página
        e.preventDefault();
        try {
        // Enviar datos al backend mediante una solicitud POST
        const response = await axios.post('http://localhost:5023/login', {correoElectronico,contraseña,});
        // Guardar mensaje de éxito en el estado 'mensaje'
        alert(response.data.mensaje);
        } catch (error) {
        // Muestra un mensaje detallado si el error ocurre
        if (error.response) {
            // Error del servidor (por ejemplo, 400)
            console.error(error.response.data);
            alert(error.response.data.error || 'Error en la autenticación');
        } else if (error.request) {
            // No se recibió respuesta del servidor
            console.error(error.request);
            alert('No se pudo realizar la solicitud');
        } else {
            // Otro tipo de error
            console.error('Error', error.message);
            alert('Error en la autenticación');
        }
    }
    }; return (
    <>
        <div className='Contenedor'>
            <p className='Seccion'>Iniciar sesion</p>
            <form onSubmit={handleLogin}>
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
                <button>Inicia sesion</button>
            </form>
        </div>
    </>
    )
}

export default ComponentLogin;