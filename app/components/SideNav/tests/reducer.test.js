import { fromJS } from 'immutable';
import sideNavReducer from '../reducer';

describe('sideNavReducer', () => {
  it('returns the initial state', () => {
    expect(sideNavReducer(undefined, {})).toEqual(fromJS({}));
  });
});
