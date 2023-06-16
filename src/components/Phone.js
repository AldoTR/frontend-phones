import React from 'react';

const Phone = (props) => {
  const { celular } = props;
  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h3 className="card-title">{celular.version}</h3>
        <h5 className="card-subtitle mb-2 text-body-secondary"><b> {celular.Phone} </b></h5>
          <p className="card-text">
            <b>Descripción: </b> {celular.descripcion}
          </p> 
          <p className="card-text">
            <b>Marca: </b> {celular.marca}
          </p> 
          <p className="card-text">
            <b>Precio: </b> {celular.tamano}
          </p>
          <p className="card-text">
            <b>Tamaño: </b> {celular.tamano}
          </p>
          <p className="card-text">
            <b>fecha: </b> {celular.fecha}
          </p>
          <p className="card-text">
            <b>Color: </b> {celular.color}
          </p>
          <p className="card-text">
            <b>CPU: </b> {celular.cpu}
          </p>
          <p className="card-text">
            <b>Memoria: </b> {celular.memoria}
          </p>
    
  </div>
</div>
  );
};



export default Phone;
