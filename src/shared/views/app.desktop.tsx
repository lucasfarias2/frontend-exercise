import React from 'react';
import App from './app';
import MultiSelectFilter from '../widgets/multi-select-filter/multi-select-filter';

const AppDesktop = ({ deviceType, initialState }: IComponent) => (
  <App initialState={initialState} deviceType={deviceType}>
    <MultiSelectFilter />
  </App>
);

export default AppDesktop;
