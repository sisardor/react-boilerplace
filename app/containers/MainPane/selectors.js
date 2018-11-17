import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainPane state domain
 */

const selectMainPaneDomain = state => state.get('mainPane', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainPane
 */

const makeSelectMainPane = () =>
  createSelector(selectMainPaneDomain, substate => substate.toJS());

export default makeSelectMainPane;
export { selectMainPaneDomain };
