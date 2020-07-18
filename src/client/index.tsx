import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './pages/App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
