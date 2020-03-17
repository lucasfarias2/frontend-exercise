import { SELECT_ITEM, REMOVE_ITEM, GET_SELECTED_ITEMS } from './types';
import { Dispatch } from 'redux';

export const selectItem = async (dispatch: Dispatch, item: string) => {
  return dispatch({
    type: SELECT_ITEM,
    payload: { item },
  });
};

export const removeItem = async (dispatch: Dispatch, item: string) => {
  return dispatch({
    type: REMOVE_ITEM,
    payload: { item },
  });
};

export const getSelectedItems = async (dispatch: Dispatch) => {
  return dispatch({
    type: GET_SELECTED_ITEMS,
  });
};
