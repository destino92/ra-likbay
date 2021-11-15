import React, { useState, useEffect } from 'react';

// admin imports
import { Admin, Resource} from 'react-admin';
import buildHasuraProvider from 'ra-data-hasura';

// client import
import { ApolloClient, InMemoryCache } from '@apollo/client';

// components
import Dashboard from './components/Dashboard';

// pages
import { ProductList, ProductCreate, ProductEdit } from './pages/product';

// browser history
import { createBrowserHistory as createHistory } from 'history';
const history = createHistory();

const createApolloClient = async () => {
  return new ApolloClient({
      uri: 'https://charming-tarpon-80.hasura.app/v1/graphql',
      cache: new InMemoryCache(),
      headers: {
          'x-hasura-admin-secret': 'H8ACM0zXZTsxSsBxTCIGxCpWKaPxh09ARSOCRuXBnRfqWw2rWvSnICIambDYbLWD'
      }
  })
}

function App() {
  const [dataProvider, setDataProvider] = useState({});

  useEffect(() => {
    const buildDataProvider = async () => {

        const apolloClient = await createApolloClient();

        const dataProvider = await buildHasuraProvider({
            client: apolloClient
        });
        setDataProvider(() => dataProvider);
    }
    buildDataProvider();
  }, []);

  return (
    <Admin 
      dataProvider={dataProvider} 
      title="Likbay commerciaux"
      //dashboard={Dashboard}
      history={history}
    >
      <Resource name="product" list={ProductList} edit={ProductEdit} create={ProductCreate} />
      <Resource name="category"/>
      <Resource name="boutique"/>
      <Resource name="subscription" />
    </Admin>
  );
}

export default App;
