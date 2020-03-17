import { SELECT_ITEM, REMOVE_ITEM, GET_SELECTED_ITEMS } from '../actions/types';

export default (state: [] = [], action: IAction) => {
  switch (action.type) {
    case SELECT_ITEM:
      const selectedItems = state.selectedItems.splice();
      selectedItems.push(action.payload.item);
      return {
        ...state,
        selectedItems: [...state.selectedItems, ...selectedItems],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        selectedItems: state.selectedItems.filter(selectedItem => selectedItem !== action.payload.item),
      };
    case GET_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: [],
      };
    default:
      return { ...state };
  }
};
