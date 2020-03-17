import React from 'react';
import App from './app';

const AppMobile = ({ deviceType, initialState }: IComponent) => (
  <App initialState={initialState} deviceType={deviceType}>
    Multi-select filter MOBILE
  </App>
);

export default AppMobile;
