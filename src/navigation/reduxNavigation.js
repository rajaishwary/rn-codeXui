import React from 'react';
import { Alert, BackHandler } from 'react-native';
import {
  createReduxContainer,
  createNavigationReducer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import AppNavigation from './appNavigation';

export const navReducer = createNavigationReducer(AppNavigation);
export const routerMiddleware = createReactNavigationReduxMiddleware(state => state.navigation);

const AppWithNavigationState = createReduxContainer(AppNavigation, 'root');

class ReduxNavigation extends React.Component {
  constructor(props, context) {
    console.log(context);
    super(props);
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { navigation, dispatch } = this.props;

    if (navigation.index === 0) {
      Alert.alert(
        'Exit',
        'Are you sure you want exit application ?',
        [
          {
            onPress: () => BackHandler.exitApp(),
            text: 'Confirm',
          },
          {
            style: 'cancel',
            text: 'Cancel',
          },
        ],
        { cancelable: false },
      );
    }
    dispatch(NavigationActions.back());

    return true;
  };

  render() {
    const { navigation, dispatch } = this.props;
    console.log(navigation, 'selectMainNavigation');

    return <AppWithNavigationState state={navigation} dispatch={dispatch} />;
  }
}

const mapStateToProps = state => {
  return {
    navigation: state.get('navigation').toJS()
  };
};
export default connect(mapStateToProps)(ReduxNavigation);
