export const Types = {
    SET_NETWORK_CONNECTION_STATUS: 'SET_NETWORK_CONNECTION_STATUS',
    SHOW_LOADER: 'SHOW_LOADER',
    HIDE_LOADER: 'HIDE_LOADER',
  };
  
  export default {
    setNetworkConnectionStatus: networkStatus => ({
      type: Types.SET_NETWORK_CONNECTION_STATUS,
      networkStatus,
    }),
    showLoader: () => ({
      type: Types.SHOW_LOADER,
    }),
    hideLoader: () => ({
      type: Types.HIDE_LOADER,
    }),
  };
  
  const initialState = {
    networkStatus: null,
    loading: false,
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case Types.SET_NETWORK_CONNECTION_STATUS:
        const { networkStatus } = action;
        return {
          ...state,
          networkStatus,
        };
      case Types.SHOW_LOADER:
        return {
          ...state,
          loading: true,
        };
      case Types.HIDE_LOADER:
        return {
          ...state,
          loading: false,
        };
    }
  
    return state;
  };
  