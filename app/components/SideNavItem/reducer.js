/*
 *
 * SideNavItem reducer
 *
 */

import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'connected-react-router/immutable';
import { DEFAULT_ACTION } from './constants';

export const initialState = fromJS([
  {
    path: '/admin',
    label: 'Home',
    icon: 'home',
    isExpanded: false,
    indent: false,
    disable: false,
    yOffset: 0,
    parent: 'root',
  },
  {
    path: '/admin/products',
    label: 'Products',
    icon: 'balance',
    isExpanded: false,
    indent: false,
    disable: false,
    yOffset: 0,
    parent: 'root',
  },
  {
    path: '/admin/payments',
    label: 'Payments',
    icon: 'payments',
    isExpanded: false,
    indent: false,
    disable: false,
    yOffset: 0,
    parent: 'root',
  },
  {
    path: '/admin/disputes',
    label: 'Disputes',
    indent: true,
    disable: false,
    parent: '/admin/products',
  },
]);

function sideNavItemReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOCATION_CHANGE:
      return state.map(item => {
        if (item.get('path') === action.payload.pathname) {
          return item.set('isExpanded', true);
        }
        return item.set('isExpanded', false);
      });
    default:
      return state;
  }
}

export default sideNavItemReducer;
