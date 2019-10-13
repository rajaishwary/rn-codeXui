import AppNavigation from './appNavigation';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  index: 0,
  routes: [{
    routeName: 'Home',
    key: 'Home'
  }]
});

export const reducer = ( state = initialState, action ) => {
  console.log(state.toJS(), "reducer");
  return state.merge(AppNavigation.router.getStateForAction(action, state.toJS()));
}
