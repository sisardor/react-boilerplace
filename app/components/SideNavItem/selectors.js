import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sideNavItem state domain
 */

const selectSideNavItemDomain = state => state.get('sideNavItem', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SideNavItem
 */

const makeSelectSideNavItem = () =>
  createSelector(selectSideNavItemDomain, substate => substate.toJS());

const getCurrentNav = createSelector(
  selectSideNavItemDomain,
  (state, props) => props,
  (sideNavItems, _props) =>
    sideNavItems.find(obj => obj.get('path') === _props.path),
);

const getNavItem = () =>
  createSelector(getCurrentNav, navItem => (navItem ? navItem.toJSON() : null));

export default makeSelectSideNavItem;
export { selectSideNavItemDomain, getNavItem };
