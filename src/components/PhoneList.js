import React from 'react';
import Phone from './Phone';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  query{
    celulares{
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
`
;

const PhoneList = () => {

    const { data } = useQuery(FEED_QUERY);

        return (
            <div className='container1'>
                {data && (
                <>
                    {data.celulares.map((celular) => (
                     <Phone key={celular.id} celular={celular} />
                 ))}
                </>
            )}
        </div>
    );
};

export default PhoneList;
