import React from 'react';
import { Alert, BackHandler } from 'react-native';
import {
  createReduxContainer,
  createNavigationReducer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigation from './appNavigation';

export const navReducer = createNavigationReducer(AppNavigation);
export const routerMiddleware = createReactNavigationReduxMiddleware(state => state.nav);
const AppWithNavigationState = createReduxContainer(AppNavigation, 'root');

class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { nav, dispatch } = this.props;

    if (nav.index === 0) {
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
    const { nav, dispatch } = this.props;
    return <AppWithNavigationState state={nav} dispatch={dispatch} />;
  }
}

const mapStateToProps = ({ nav }) => ({ nav });
export default connect(mapStateToProps)(ReduxNavigation);
