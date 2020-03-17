import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import MultiSelectFilter from './multi-select-filter';
import { selectItem, removeItem } from '../../../client/actions/creators';

const mapStateToProps = (state: IMultiSelectFilterFeature) => {
  return { data: state.data, selectedItems: state.selectedItems };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    selectItem: (item: string) => {
      selectItem(dispatch, item);
    },
    removeItem: (item: string) => {
      removeItem(dispatch, item);
    },
  };
};

interface IMultiSelectFilterFeature {
  data: string[];
  selectedItems: string[];
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiSelectFilter);
