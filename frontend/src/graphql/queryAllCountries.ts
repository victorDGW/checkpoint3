import { gql } from '@apollo/client'

export const queryAllCountries = gql`
  query Countries {
    items: countries {
      code
      emoji
      id
      name
      continent {
        id
        name
      }
    }
  }
`
