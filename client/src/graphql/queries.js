import { gql } from '@apollo/client';

export const GET_REPRESENTATIVES_QUERY = gql`
  query GetRepresentatives {
    representatives {
      id
      name
      position
      district
      contact
    }
  }
`;
