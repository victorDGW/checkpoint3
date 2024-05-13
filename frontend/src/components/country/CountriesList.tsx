import React from 'react'
import { useQuery } from '@apollo/client'
import { Country } from '@/types/country'
import { queryAllCountries } from '@/graphql/queryAllCountries'
import CountryItem from './CountryItem'

function CountriesList(): React.ReactNode {
  const { data, error, loading } = useQuery<{ items: Country[] }>(
    queryAllCountries
  )

  /** sort data alphabetical **/
  const sortedItems = data?.items.slice().sort((a, b) => {
    return a.name.localeCompare(b.name)
  })

  console.debug('data', data)
  if (loading)
    return <p className="material-symbols-outlined rotate ">cached</p>
  if (error) return <p className="error">Error: {error.message}</p>
  if (!data) return <p className="warning">No Data</p>

  return (
    <div>
      {sortedItems && (
        <ul className="d-flex-row">
          {sortedItems.map((country: Country) => (
            <CountryItem key={country.id} country={country} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default CountriesList
