import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-simple-rest';

const dataProvider = jsonServerProvider('https://by7w1cv1.directus.app/items/contacts');

const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="users" list={ListGuesser} />
      </Admin>
  );

export default App;