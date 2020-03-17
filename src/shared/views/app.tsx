import React from 'react';
import serialize from 'serialize-javascript';
import { Provider } from 'react-redux';
import Script from '../utils/script';
import Style from '../utils/style';
import createStore from '../../client/create-store';
import reducers from '../..//client/reducers/app';

const App = ({ children, deviceType, initialState }: IComponent) => {
  return (
    <Provider store={createStore(initialState, reducers)}>
      <Script>{`window.__PRELOADED_STATE__ = ${serialize(initialState, {
        isJSON: true,
      })}`}</Script>
      <Style src={`app.${deviceType}`} />
      <Script src={`app.${deviceType}`} />
      <section className="app">{children}</section>
    </Provider>
  );
};

export default App;
