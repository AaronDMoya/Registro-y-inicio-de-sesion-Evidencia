import React from 'react';
import './App.css';
import  ComponentRegister  from './ComponentRegister';
import  ComponentLogin  from './ComponentLogin';

function App() {
  return (
    <div>
    <h1>INICIO DE SESION Y REGISTRO</h1>
    <hr />
    <div className='opciones'>
      < ComponentLogin />
      < ComponentRegister />
    </div>
    <hr />
    </div>
  );
}

export default App
