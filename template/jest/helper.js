import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../src/redux/store';

const AllTheProviders = ({children, optionalStore}) => {
  return (
    <Provider store={optionalStore || store}>
      <NavigationContainer>{children}</NavigationContainer>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
