import { fromJS } from 'immutable';
import sideNavItemReducer from '../reducer';

describe('sideNavItemReducer', () => {
  it('returns the initial state', () => {
    expect(sideNavItemReducer(undefined, {})).toEqual(fromJS({}));
  });
});
