import { fromJS } from 'immutable';
import { actionsTypes } from './actions';

const initialState = fromJS({
  list: null,
  meta: null,
  loading: false
});

function homeReducer(state = initialState, action) {
  switch (action.type) {

    case actionsTypes.GET_HOME_LIST_REQUEST:
      return state
      .set(['loading'], true);

    case actionsTypes.GET_HOME_LIST_SUCCESS:
      return state
      .set(['list'], action.data);

    default:
      return state;
  }
}

export default homeReducer;
