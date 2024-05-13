import { Layout } from '@/components/Layout'
import CountryList from '@/components/country/CountriesList'
export default function Home() {
  return (
    <Layout title="Home">
      <h1> list of country</h1>
      <CountryList />
    </Layout>
  )
}
