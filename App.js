import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';

import Loader from './src/sections/components/Loader';
import AppView from './AppView';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <AppView />
    </PersistGate>
  </Provider>
);

export default App;
