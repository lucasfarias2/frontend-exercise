import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getSelectedItems } from '../creators';
import { GET_SELECTED_ITEMS, SELECT_ITEM } from '../types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  const store = mockStore({ data: ['test'], selectedItems: [], filter: '' });

  it('should create an action get selected items', () => {
    const expectedActions = [
      {
        type: GET_SELECTED_ITEMS,
      },
    ];
    // @ts-ignore
    return store.dispatch(getSelectedItems).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
