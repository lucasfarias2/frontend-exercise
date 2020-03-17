import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default (props: object, reducers: (state: [], action: IAction) => {}) =>
  createStore(reducers, { ...props }, applyMiddleware(logger, thunk));
