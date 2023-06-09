import React from 'react';
import Phone from './Phone';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    celulares{
        id
        version
        description
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
//   const seriesToRender = [
//     {
//       id: 'link-id-1',
//       description:
//         'Prisma gives you a powerful database toolkit 😎',
//       url: 'https://prisma.io'
//     },
//     {
//       id: 'link-id-2',
//       description: 'The best GraphQL client',
//       url: 'https://www.apollographql.com/docs/react/'
//     }
//   ];

    const { data } = useQuery(FEED_QUERY);

        return (
            <div>
                {data && (
                <>
                    {data.celulares.map((celulares) => (
                     <Phone key={celularesid} celulares={celulares} />
                 ))}
                </>
            )}
        </div>
    );
};

export default PhoneList;
