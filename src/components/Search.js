import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const GET_PROMPTS_QUERY = gql`
  query GetPrompts($search: String!) {
    consultas(search: $search) {
      id
      prompt
      result
      fecha
      modelo
      postedBy {
        username
      }
    }
  }
`;

const Filter = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data }] = useLazyQuery(GET_PROMPTS_QUERY);

  return (
    <>
      <div className="container">
      <h3 className="card-title2">Search</h3>
        <input
          className="input-field"
          type="text"
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <button className="pointer button"
          onClick={() =>
            executeSearch({
              variables: { search: searchFilter } // Modificamos 'filter' a 'search'
            })
          }
        >
          OK
        </button>
        {data &&
        data.consultas.map((prompt) => (
          <div className="container2" key={prompt.id}>
            <h3 className="card-title">{prompt.id}</h3>
            <p className='resultado'>Prompt: {prompt.prompt}</p>
            <p className='resultado'>Result: {prompt.result}</p>
            <p className='resultado'>Fecha: {prompt.fecha}</p>
            <p className='resultado'>Modelo: {prompt.modelo}</p>
            <p className='resultado'>PostedBy: {prompt.postedBy.username}</p>
          </div>
        ))}
      </div >
      
    </>
  );
};

export default Filter;