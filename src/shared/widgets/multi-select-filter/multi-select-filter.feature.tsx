import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import MultiSelectFilter from './multi-select-filter';

const mapStateToProps = (state: IMultiSelectFilterFeature) => {
  return { data: state.data };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

interface IMultiSelectFilterFeature {
  data: string[];
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiSelectFilter);
