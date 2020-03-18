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
    selectItem: (item: string) => {
      selectItem(dispatch, item);
    },
    removeItem: (item: string) => {
      removeItem(dispatch, item);
    },
    setItemsFilter: (filter: string) => {
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
  data: string[];
  filter?: string;
  selectedItems: string[];
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiSelectFilter);
