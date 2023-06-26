import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { AUTH_TOKEN } from './constants';
import { useNavigate } from 'react-router-dom';

const CREATE_ATTRIBUTE_MUTATION = gql`
  mutation PostMutation(
    $version: String!,
    $descripcion: String!,
    $marca: String!,
    $precio: Float!,
    $tamano: String!,
    $sistema: String!,
    $fecha: String!,
    $color: String!,
    $cpu: String!,
    $memoria: String!
  ){
    createCelular(
      version: $version,
      descripcion: $descripcion,
      marca: $marca,
      precio: $precio,
      tamano: $tamano,
      sistema: $sistema,
      fecha: $fecha,
      color: $color,
      cpu: $cpu,
      memoria: $memoria
    ) {
      id 
      version
      descripcion
      marca
      precio
      tamano
      sistema
      fecha
      color
      cpu
      memoria 
    }
  }
`;

const CreatePhone = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    version: '',
    descripcion: '',
    marca: '',
    precio: 0,
    tamano: '',
    sistema: '',
    fecha: '',
    color: '',
    cpu: '',
    memoria: '',
  });

  const authToken = localStorage.getItem(AUTH_TOKEN);
  const [createPhone] = useMutation(CREATE_ATTRIBUTE_MUTATION, {
    context: {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    },
    variables: {
      version: formState.version,
      descripcion: formState.descripcion,
      marca: formState.marca,
      precio: formState.precio,
      tamano: formState.tamano,
      sistema: formState.sistema,
      fecha: formState.fecha,
      color: formState.color,
      cpu: formState.cpu,
      memoria: formState.memoria,
    },
    onCompleted: () => navigate('/')
  });

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPhone();
        }}
      >
        <div className="container">
          <h3 className="card-title2">Create new phone</h3>
          <input
            className="input-field"
            value={formState.version}
            onChange={(e) =>
              setFormState({
                ...formState,
                version: e.target.value
              })
            }
            type="text"
            placeholder="Versión"
          />
          <input
            className="input-field"
            value={formState.descripcion}
            onChange={(e) =>
              setFormState({
                ...formState,
                descripcion: e.target.value
              })
            }
            type="text"
            placeholder="Descripción"
          />
           <input
            className="input-field"
            value={formState.marca}
            onChange={(e) =>
              setFormState({
                ...formState,
                marca: e.target.value
              })
            }
            type="text"
            placeholder="Marca"
          />
           <input
            className="input-field"
            value={formState.precio}
            onChange={(e) =>
              setFormState({
                ...formState,
                precio: e.target.value
              })
            }
            type="number"
            placeholder="Precio"
          />
           <input
            className="input-field"
            value={formState.tamano}
            onChange={(e) =>
              setFormState({
                ...formState,
                tamano: e.target.value
              })
            }
            type="text"
            placeholder="Tamaño"
          />
           <input
            className="input-field"
            value={formState.sistema}
            onChange={(e) =>
              setFormState({
                ...formState,
                sistema: e.target.value
              })
            }
            type="text"
            placeholder="Sistema"
          />
           <input
            className="input-field"
            value={formState.fecha}
            onChange={(e) =>
              setFormState({
                ...formState,
                fecha: e.target.value
              })
            }
            type="text"
            placeholder="Año de lanzamiento"
          />
           <input
            className="input-field"
            value={formState.color}
            onChange={(e) =>
              setFormState({
                ...formState,
                color: e.target.value
              })
            }
            type="text"
            placeholder="Color"
          />
           <input
            className="input-field"
            value={formState.cpu}
            onChange={(e) =>
              setFormState({
                ...formState,
                cpu: e.target.value
              })
            }
            type="text"
            placeholder="Gigabytes de CPU"
          />
           <input
            className="input-field"
            value={formState.memoria}
            onChange={(e) =>
              setFormState({
                ...formState,
                memoria: e.target.value
              })
            }
            type="text"
            placeholder="Gigabytes de memoria"
          />
          <button type="submit" className="pointer button">Agregar</button>
        </div >
      </form>
    </div>
    
  );
   
};

export default CreatePhone;