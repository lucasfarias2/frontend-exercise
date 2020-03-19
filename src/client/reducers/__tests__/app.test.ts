import reducers from '../app';

describe('reducers', () => {
  it('Case GET_SELECTED_ITEMS', () => {
    let state;
    state = reducers(
      {
        data: ['Literatuur &amp; Romans', 'Thrillers', 'Fantasy'],
        selectedItems: [],
        filter: '',
      },
      { type: 'GET_SELECTED_ITEMS' }
    );
    expect(state).toEqual({
      data: ['Literatuur &amp; Romans', 'Thrillers', 'Fantasy'],
      selectedItems: [],
      filter: '',
    });
  });

  it('Case SELECT_ITEM', () => {
    let state;
    state = reducers(
      {
        data: ['Literatuur &amp; Romans', 'Thrillers', 'Fantasy'],
        selectedItems: [],
        filter: '',
      },
      { type: 'SELECT_ITEM', payload: { item: 'Thrillers' } }
    );
    expect(state).toEqual({
      data: ['Literatuur &amp; Romans', 'Thrillers', 'Fantasy'],
      selectedItems: ['Thrillers'],
      filter: '',
    });
  });

  it('Case REMOVE_ITEM', () => {
    let state;
    state = reducers(
      {
        data: ['Literatuur &amp; Romans', 'Thrillers', 'Fantasy'],
        selectedItems: ['Thrillers'],
        filter: '',
      },
      { type: 'REMOVE_ITEM', payload: { item: 'Thrillers' } }
    );
    expect(state).toEqual({
      data: ['Literatuur &amp; Romans', 'Thrillers', 'Fantasy'],
      selectedItems: [],
      filter: '',
    });
  });

  it('Case SET_ITEMS_FILTER', () => {
    let state;
    state = reducers(
      {
        data: ['Literatuur &amp; Romans', 'Thrillers', 'Fantasy'],
        selectedItems: [],
        filter: '',
      },
      { type: 'SET_ITEMS_FILTER', payload: { filter: 'Thrillers' } }
    );
    expect(state).toEqual({
      data: ['Literatuur &amp; Romans', 'Thrillers', 'Fantasy'],
      selectedItems: [],
      filter: 'Thrillers',
    });
  });

  it('Case CLEAR_SELECTED_ITEMS', () => {
    let state;
    state = reducers(
      {
        data: ['Literatuur &amp; Romans', 'Thrillers', 'Fantasy'],
        selectedItems: ['Fantasy'],
        filter: 'filter not removed',
      },
      { type: 'CLEAR_SELECTED_ITEMS' }
    );
    expect(state).toEqual({
      data: ['Literatuur &amp; Romans', 'Thrillers', 'Fantasy'],
      selectedItems: [],
      filter: 'filter not removed',
    });
  });
});
