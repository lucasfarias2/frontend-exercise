import React from 'react';
import App from './app';
import MultiSelectFilter from '../widgets/multi-select-filter/multi-select-filter.feature';

const AppMobile = ({ deviceType, initialState }: IComponent) => (
  <App initialState={initialState} deviceType={deviceType}>
    <MultiSelectFilter />
  </App>
);

export default AppMobile;
