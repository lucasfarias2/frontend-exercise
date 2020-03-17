import { SELECT_ITEM, REMOVE_ITEM } from '../actions/types';

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
    default:
      return { ...state };
  }
};
