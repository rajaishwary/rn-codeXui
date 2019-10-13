import { createSelector } from 'reselect';
import { COMPONENT } from './constants';

const selectHome = state => state.get(COMPONENT);

const selectHomeList = () =>
  createSelector(
    selectHome,
    substate => substate.get('list'),
  );

export { selectHomeList };
