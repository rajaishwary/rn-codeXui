import React from 'react';
import PropTypes from 'prop-types';
import { ReactReduxContext } from 'react-redux';
import hoistNonReactStatics from 'hoist-non-react-statics';
import getInjectors from './reducerInjectors';

export default ({key, reducer}) => WrappedComponent => {
  class ReducerInjector extends React.Component {
    static WrappedComponent = WrappedComponent;
    static contextType = ReactReduxContext
    static displayName = `withReducer(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    constructor(props, context) {
      super();
      console.log(context, 'context', key, reducer);
      const {injectReducer} = getInjectors(context.store);
      injectReducer(key, reducer);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};
