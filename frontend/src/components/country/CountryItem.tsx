import { Country } from '@/types/country'
import Link from 'next/link'
import React from 'react'

export type CountryProps = {
  country: Country
}

function CountryItem({ country }: CountryProps): React.ReactNode {
  return (
    <div>
      <Link href={`/country/${country.code}/`}>
        {country.emoji} {country.name}
      </Link>
    </div>
  )
}

export default CountryItem
