import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import MultiSelectFilter from './multi-select-filter';
import {
  selectItem,
  removeItem,
  getSelectedItems,
  clearSelectedItems,
  setItemsFilter,
} from '../../../client/actions/creators';

const mapStateToProps = (state: IMultiSelectFilterFeature) => {
  return { data: state.data, selectedItems: state.selectedItems, filter: state.filter };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    selectItem: (item: TItem) => {
      selectItem(dispatch, item);
    },
    removeItem: (item: TItem) => {
      removeItem(dispatch, item);
    },
    setItemsFilter: (filter: TFilter) => {
      setItemsFilter(dispatch, filter);
    },
    getSelectedItems: () => {
      getSelectedItems(dispatch);
    },
    clearSelectedItems: () => {
      clearSelectedItems(dispatch);
    },
  };
};

interface IMultiSelectFilterFeature {
  data: TData;
  filter?: TFilter;
  selectedItems: TSelectedItems;
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiSelectFilter);
