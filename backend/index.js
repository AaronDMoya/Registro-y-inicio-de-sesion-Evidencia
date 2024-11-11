const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5023;

// Permite solicitudes desde el frontend
app.use(cors());

// Permite recibir datos en formato JSON en el cuerpo de la petición
app.use(express.json());

// Este es un objeto que almacena a los usuarios registrados temporalmente
const usuarios = {};

// Ruta de registro
app.post('/registro', (req, res) => {
    // Importa el usuario y contraseña del sitio que fueron ingresados
    const { correoElectronico, contraseña } = req.body;
    // Verifica si los datos están presentes
    if (!correoElectronico || !contraseña) {
        return res.status(400).json({ error: 'Faltan datos: correoElectronico o contraseña' });
    }
    // Verifica si el usuario ya existe
    if (usuarios[correoElectronico]) {
        return res.status(400).json({ error: "El usuario ya existe" });
    }
    // Almacena el usuario
    usuarios[correoElectronico] = { contraseña };
    res.json({ mensaje: "Usuario registrado exitosamente" });
});

  // Ruta de inicio de sesion
app.post('/login', (req, res) => {
    // Importa el usuario y contraseña del sitio que fueron ingresados
    const { correoElectronico, contraseña } = req.body;
    // Verifica si los datos están presentes
    if (!correoElectronico || !contraseña) {
        return res.status(400).json({ error: 'Faltan datos: correoElectronico o contraseña' });
    }
    // Verifica si el usuario existe y la contraseña es correcta
    if (usuarios[correoElectronico] && usuarios[correoElectronico].contraseña === contraseña) {
        res.json({ mensaje: "Autenticación satisfactoria" });
    } 
    // Devuelve un error si los datos son incorrectos
    else {
        res.status(401).json({ error: "Error en la autenticación" });
    }
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});