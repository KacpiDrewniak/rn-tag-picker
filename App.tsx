import React from 'react';
import {Navigation, store} from './src';
import {Provider} from 'react-redux';

export const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
