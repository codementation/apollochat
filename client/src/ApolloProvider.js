import React from 'react'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

// places the client on the context, which enables you to access it from anywhere in your component tree
export default function ApolloProvider(props) {
  return <Provider client={client} {...props} />
}
