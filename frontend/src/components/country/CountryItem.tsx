import { Country } from '@/types/country'
import Link from 'next/link'
import React from 'react'

export type CountryProps = {
  country: Country
}

function CountryItem({ country }: CountryProps): React.ReactNode {
  return (
    <div className="card">
      <Link className="d-flex-row " href={`/country/${country.code}/`}>
        <div>{country.name}</div>
        <span> {country.emoji} </span>
      </Link>
    </div>
  )
}

export default CountryItem
