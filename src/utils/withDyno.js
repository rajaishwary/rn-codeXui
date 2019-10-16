import React from 'react';
import PropTypes from 'prop-types';
import dynamic from '@redux-dynostore/react-redux'
import subspaced from '@redux-dynostore/react-redux-subspace'
import { attachReducer } from '@redux-dynostore/redux-subspace'
import runSaga from '@redux-dynostore/redux-subspace-saga'
import hoistNonReactStatics from 'hoist-non-react-statics';

export default ({key, reducer, saga}) => WrappedComponent => {
  class Injector extends React.Component {
    static WrappedComponent = WrappedComponent;
    constructor() {
      super();
      dynamic(key, subspaced(), attachReducer(reducer), runSaga(saga));
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(Injector, WrappedComponent);
};
