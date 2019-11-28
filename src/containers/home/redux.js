export const actionsTypes = {
  GET_HOME_LIST_REQUEST: 'Home/GET_HOME_LIST_REQUEST',
  GET_HOME_LIST_SUCCESS: 'Home/GET_HOME_LIST_SUCCESS',
};

export function getHomeList() {
  return {
    type: actionsTypes.GET_HOME_LIST_REQUEST,
  };
}

export function getHomeSuccess(data) {
  return {
    type: actionsTypes.GET_HOME_LIST_SUCCESS,
    data,
  };
}

const initialState = {
  list: null,
  meta: null,
  loading: false
};

export const reducer = (state = initialState, action) => {
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
};
