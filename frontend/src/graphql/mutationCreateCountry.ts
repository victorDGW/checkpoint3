import { gql } from '@apollo/client'

export const mutationCreateCountry = gql`
  mutation Mutation($data: NewCountryInput!) {
    item: addCountry(data: $data) {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`
