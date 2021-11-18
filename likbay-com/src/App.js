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
import { BoutiqueList, BoutiqueCreate, BoutiqueEdit } from './pages/boutique';
import LoginPage  from './pages/login';

// utils
import authProvider from './utils/authProvider';
import { auth0 } from "./utils/authProvider";

// browser history
import { createBrowserHistory as createHistory } from 'history';
const history = createHistory();


const createApolloClient = async (token) => {
  return new ApolloClient({
      uri: 'https://charming-tarpon-80.hasura.app/v1/graphql',
      cache: new InMemoryCache(),
      headers: {
          'Authorization': `Bearer ${token}`
      }
  })
}

function App() {
  const [dataProvider, setDataProvider] = useState({});

  useEffect(() => {
    const buildDataProvider = async () => {

        const isAuthenticated = await auth0.isAuthenticated();

        if(!isAuthenticated) {
            return;
        }
        
        const token = await auth0.getIdTokenClaims();
        const idToken = token.__raw;
        console.log(idToken);

        const apolloClient = await createApolloClient(idToken);

        const dataProvider = await buildHasuraProvider({
            client: apolloClient
        });
        setDataProvider(() => dataProvider);
    }
    buildDataProvider();
  }, []);

  if(dataProvider == {}) {
    return <div>Loading...</div>
  }

  return (
    
    <Admin 
      authProvider={authProvider}
      dataProvider={dataProvider} 
      title="Likbay commerciaux"
      dashboard={Dashboard}
      loginPage={LoginPage}
      history={history}
    >
      <Resource name="product" list={ProductList} edit={ProductEdit} create={ProductCreate} />
      <Resource name="boutique" list={BoutiqueList} edit={BoutiqueEdit} create={BoutiqueCreate} />
      <Resource name="category"/>
      <Resource name="subscription" />
    </Admin>
  );
}

export default App;
