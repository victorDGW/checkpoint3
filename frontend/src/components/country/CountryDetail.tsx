import React from 'react'
import { useQuery } from '@apollo/client'
import { Country } from '@/types/country'
import { queryCountryByCode } from '@/graphql/queryCountry'

function CountryDetail({
  codeCountry,
}: {
  codeCountry: string
}): React.ReactNode {
  const { data, error, loading } = useQuery<{ item: Country }>(
    queryCountryByCode,
    {
      variables: { code: codeCountry },
    }
  )

  if (loading)
    return <p className="material-symbols-outlined rotate ">cached</p>
  if (
    error?.message == 'Cannot return null for non-nullable field Query.country.'
  )
    return <p className="warning"> Country not found</p>
  if (error) return <p className="error">Error: {error.message}</p>
  if (!data) return <p className="warning">No Data</p>

  return (
    <div>
      {data?.item && (
        <div>
          <h2 className="title-country ">{data.item.emoji} </h2>

          <div className="item-center my-1">
            <ul>
              <li>
                {' '}
                Name : {data.item.name} ({data.item.code})
              </li>

              {data.item.continent && (
                <li>continent : {data.item.continent?.name}</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default CountryDetail
