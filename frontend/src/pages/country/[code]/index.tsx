import React from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@/components/Layout'
import type { Country } from '@/types/country'
import CountryDetail from '@/components/country/CountryDetail'
import { ButtonBack } from '@/components/ButtonBack'
import AddCountry from '@/components/country/AddCountry'

// import { ButtonBack } from '@/components/ButtonBack'

function Country(): React.ReactNode {
  const router = useRouter()
  const { code: codeCountry } = router.query as { code: string }

  if (!codeCountry) {
    return <p className="no-data">No code country with {codeCountry}</p>
  }

  return (
    <Layout title="country detail">
      <main>
        <div className="container">
          <ButtonBack />

          <CountryDetail codeCountry={codeCountry} />
        </div>
      </main>
    </Layout>
  )
}

export default Country
