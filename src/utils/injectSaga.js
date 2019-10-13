import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import getInjectors from './sagaInjectors';

export default ({key, saga, mode}) => WrappedComponent => {
  class InjectSaga extends React.Component {
    static WrappedComponent = WrappedComponent;
    static contextTypes = {
      store: PropTypes.object.isRequired,
    };
    static displayName = `withSaga(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    constructor(props, context) {
      super();
      this.injectors = getInjectors(context.store);
      const {injectSaga} = this.injectors;

      injectSaga(key, {saga, mode}, props);
    }
    componentWillUnmount() {
      const {ejectSaga} = this.injectors;
      ejectSaga(key);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return hoistNonReactStatics(InjectSaga, WrappedComponent);
};
