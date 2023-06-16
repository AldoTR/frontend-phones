import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_ATTRIBUTE_MUTATION = gql`
  mutation PostMutation(
    $version: String!
    $descripcion: String!
    $marca: String!
    $precio: Integer!
    $tamano: String!
    $sistema: String!
    $fecha: String!
    $color: String!
    $cpu: String!
    $memoria: String!
  ) {
    createAttribute(version:$version,descripcion:$descripcion,marca:$marca,precio:$precio,tamano:$tamano,sistema:$sistema,fecha:$fecha,color:$cpu,memoria:$memoria) {
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
  const [formState, setFormState] = useState({
    id:'',
    version: '',
    descripcion: '',
    marca: '',
    precio:'',
    tamano: '',
    sistema: '',
    fecha: '',
    color: '',
    cpu: '',
    memoria: '',
  });

  const [CreatePhone] = useMutation(CREATE_ATTRIBUTE_MUTATION, {
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
    }

    
  });


  return (
    <div className='mb-3 mt-2 '>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          CreatePhone();
        }}
      >
        <div className="flex flex-column mb2">
          <input
            className="form-label form-control mb-3 mt-3"
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
            className="form-label form-control mb-3 mt-1"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="Descripción"
          />
           <input
            className="form-label form-control mb-3 mt-1"
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
            className="form-label form-control mb-3 mt-1"
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
            className="form-label form-control mb-3 mt-1"
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
            className="form-label form-control mb-3 mt-1"
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
            className="form-label form-control mb-3 mt-1"
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
            className="form-label form-control mb-3 mt-1"
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
            className="form-label form-control mb-3 mt-1"
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
            className="form-label form-control mb-3 mt-1"
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
          
        </div >
        <button type="submit" className='btn btn-primary  btn-lg'>Agregar</button>
      </form>
    </div>
    
  );
   
};

export default CreatePhone;