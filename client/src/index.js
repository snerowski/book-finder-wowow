import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// create a new instance of the Apollo client
const client = new ApolloClient({
  uri: '/graphql', // the endpoint for the GraphQL API
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}> // wrap the App component with ApolloProvider
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

