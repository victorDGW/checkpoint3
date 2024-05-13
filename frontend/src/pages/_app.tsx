import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client'
import dynamic from 'next/dynamic'

function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false })
