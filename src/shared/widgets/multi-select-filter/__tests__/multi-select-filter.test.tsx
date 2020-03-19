import React from 'react';
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react';
import MultiSelectFilter from '../multi-select-filter';

afterEach(cleanup);

describe('<MultiSelectFilter />', () => {
  const selectedItems: TSelectedItems = ['Fantasy Selected'];
  const getSelectedItems = jest.fn();
  const removeItem = jest.fn();
  const selectItem = jest.fn();
  const setItemsFilter = jest.fn();
  const clearSelectedItems = jest.fn();

  const props = {
    data: ['Literatuur &amp; Romans', 'Thrillers', 'Fantasy', 'Kinderboeken', 'Young Adult'],
    filter: 'fantasy',
    selectedItems,
    getSelectedItems,
    removeItem,
    selectItem,
    setItemsFilter,
    clearSelectedItems,
  };

  it('renders correctly', () => {
    const { container } = render(<MultiSelectFilter {...props} />);
    expect(container).toMatchSnapshot();
    expect(getSelectedItems).toHaveBeenCalled();
  });

  it('calls setItemsFilter', () => {
    const { getByTestId } = render(<MultiSelectFilter {...props} />);
    fireEvent.click(getByTestId('button_apply'));
    expect(setItemsFilter).toHaveBeenCalled();
  });

  it('calls selectItem', () => {
    const { getByTestId } = render(<MultiSelectFilter {...props} />);
    fireEvent.click(getByTestId('Fantasy'));
    expect(selectItem).toHaveBeenCalled();
  });

  it('calls removeItem', () => {
    const { getByTestId } = render(<MultiSelectFilter {...props} />);
    fireEvent.click(getByTestId('Fantasy Selected'));
    expect(removeItem).toHaveBeenCalled();
  });

  it('calls clearSelectedITems', () => {
    const { getByTestId } = render(<MultiSelectFilter {...props} />);
    fireEvent.click(getByTestId('button_clear'));
    expect(clearSelectedItems).toHaveBeenCalled();
  });
});
