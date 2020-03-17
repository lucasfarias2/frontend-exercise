import { SELECT_ITEM, REMOVE_ITEM, GET_SELECTED_ITEMS } from '../actions/types';

export default (state: [] = [], action: IAction) => {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
      };
    case REMOVE_ITEM:
      return {
        ...state,
      };
    case GET_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: ['Fantasy'],
      };
    default:
      return { ...state };
  }
};
