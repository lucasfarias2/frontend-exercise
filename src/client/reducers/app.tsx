import { CLEAR_SELECTED_ITEMS, GET_SELECTED_ITEMS, REMOVE_ITEM, SELECT_ITEM, SET_ITEMS_FILTER } from '../actions/types';

export default (state: [] = [], action: IAction) => {
  let items = null;
  switch (action.type) {
    case SELECT_ITEM:
      const selectedItems = state.selectedItems.splice();
      selectedItems.push(action.payload.item);
      if (typeof window !== undefined && localStorage) {
        items = JSON.parse(localStorage.getItem('bol_selected_items'));
        localStorage.setItem('bol_selected_items', JSON.stringify([...items, ...selectedItems]));
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems, ...selectedItems],
      };
    case REMOVE_ITEM:
      const filteredItems = state.selectedItems.filter((selectedItem: string) => selectedItem !== action.payload.item);
      if (typeof window !== undefined && localStorage) {
        items = JSON.parse(localStorage.getItem('bol_selected_items'));
        const filteredStorageItems = items.filter((selectedItem: string) => selectedItem !== action.payload.item);
        localStorage.setItem('bol_selected_items', JSON.stringify(filteredStorageItems));
      }
      return {
        ...state,
        selectedItems: filteredItems,
      };
    case GET_SELECTED_ITEMS:
      if (typeof window !== undefined && localStorage) {
        items = JSON.parse(localStorage.getItem('bol_selected_items'));

        if (!items) {
          localStorage.setItem('bol_selected_items', JSON.stringify([]));
        }
      }
      return {
        ...state,
        selectedItems: items || [],
      };
    case CLEAR_SELECTED_ITEMS:
      if (typeof window !== undefined && localStorage) {
        localStorage.setItem('bol_selected_items', JSON.stringify([]));
      }
      return {
        ...state,
        selectedItems: [],
      };
    case SET_ITEMS_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    default:
      return { ...state };
  }
};
