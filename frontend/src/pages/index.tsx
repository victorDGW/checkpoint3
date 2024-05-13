import { Layout } from '@/components/Layout'
import AddCountry from '@/components/country/AddCountry'
import CountryList from '@/components/country/CountriesList'
export default function Home() {
  return (
    <Layout title="Home">
      <div className="container">
        <AddCountry />
      </div>

      <div className="container">
        <CountryList />
      </div>
    </Layout>
  )
}
