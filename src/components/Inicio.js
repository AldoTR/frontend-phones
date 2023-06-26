import React from 'react';
import "../styles/Inicio.css"
import "../styles/Alumno.css"
import PhoneList from './PhoneList';

export const Imagen = () => {
  return (
    <div className="imagen"></div>
  );
};

export const Alumno = () => {
  return (
    <div className="container">
      <div className="TarjetaFoto">
        <img src="./img/Yo1.jpg" alt="FotoPersonal" className="Foto"></img>
        <div className="Info">
          <p className="Matricula">Aldo Torres Ramírez</p>
          <p className="Matricula">zS20006781</p>
        </div>
      </div>

      <div className="container">
        <p className="Titulo">API de celulares</p>
        <h1 className="Subtitulo">API de celulares</h1>
        <PhoneList></PhoneList>
      </div>
    </div>
  );
}