import { createStackNavigator } from 'react-navigation-stack';
import { Routes } from './routes';
import Home from '../containers/home';

const Navigator = createStackNavigator(
  {
    [Routes.home]: { screen: Home },
  },
  {
    initialRouteName: Routes.home,
    lazy: true,
    backBehavior: 'history',
  },
);

export default Navigator;
