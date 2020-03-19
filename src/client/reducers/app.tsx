import { CLEAR_SELECTED_ITEMS, GET_SELECTED_ITEMS, REMOVE_ITEM, SELECT_ITEM, SET_ITEMS_FILTER } from '../actions/types';
import LocalStorageService from '../services/local-storage';

const LOCAL_STORAGE_ITEM = 'bol_selected_items';

export default (state: IState, action: IAction) => {
  let items = null;

  switch (action.type) {
    case SELECT_ITEM:
      const selectedItems = [];
      selectedItems.push(action.payload.item);
      items = LocalStorageService.getLocalStorageItem(LOCAL_STORAGE_ITEM);
      LocalStorageService.setLocalStorageItem(LOCAL_STORAGE_ITEM, [...items, ...selectedItems]);
      return {
        ...state,
        selectedItems: [...state.selectedItems, ...selectedItems],
      };

    case REMOVE_ITEM:
      const filteredItems = state.selectedItems.filter((selectedItem: TItem) => selectedItem !== action.payload.item);
      items = LocalStorageService.getLocalStorageItem(LOCAL_STORAGE_ITEM);
      const filteredStorageItems = items.filter((selectedItem: TItem) => selectedItem !== action.payload.item);
      LocalStorageService.setLocalStorageItem(LOCAL_STORAGE_ITEM, filteredStorageItems);
      return {
        ...state,
        selectedItems: filteredItems,
      };

    case GET_SELECTED_ITEMS:
      items = LocalStorageService.getLocalStorageItem(LOCAL_STORAGE_ITEM);
      if (!items) {
        LocalStorageService.setLocalStorageItem(LOCAL_STORAGE_ITEM, []);
      }
      return {
        ...state,
        selectedItems: items || [],
      };

    case CLEAR_SELECTED_ITEMS:
      LocalStorageService.setLocalStorageItem(LOCAL_STORAGE_ITEM, []);
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
      return state;
  }
};
