import { fromJS } from 'immutable';
import mainPaneReducer from '../reducer';

describe('mainPaneReducer', () => {
  it('returns the initial state', () => {
    expect(mainPaneReducer(undefined, {})).toEqual(fromJS({}));
  });
});
