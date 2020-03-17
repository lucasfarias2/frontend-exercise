import React from 'react';
import App from './app';

const AppDesktop = ({ deviceType, initialState }: IComponent) => (
  <App initialState={initialState} deviceType={deviceType}>
    Multi-select filter DESKTOP
  </App>
);

export default AppDesktop;
