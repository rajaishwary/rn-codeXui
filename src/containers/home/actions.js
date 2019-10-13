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

