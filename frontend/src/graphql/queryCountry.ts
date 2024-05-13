import { gql } from '@apollo/client'

export const queryCountryByCode = gql`
  query Countries($code: String!) {
    item: country(code: $code) {
      id
      code
      name
      emoji
      continent {
        name
        id
      }
    }
  }
`
