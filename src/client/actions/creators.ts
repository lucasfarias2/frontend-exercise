import { SELECT_ITEM, REMOVE_ITEM, GET_SELECTED_ITEMS, CLEAR_SELECTED_ITEMS, SET_ITEMS_FILTER } from './types';
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

export const clearSelectedItems = async (dispatch: Dispatch) => {
  return dispatch({
    type: CLEAR_SELECTED_ITEMS,
  });
};

export const setItemsFilter = async (dispatch: Dispatch, filter: string) => {
  return dispatch({
    type: SET_ITEMS_FILTER,
    payload: { filter },
  });
};
