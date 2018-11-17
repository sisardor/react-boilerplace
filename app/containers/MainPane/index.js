/**
 *
 * MainPane
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import PaneContainer from 'components/PaneContainer';
import makeSelectMainPane from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class MainPane extends React.Component {
  render() {
    return <PaneContainer>Home Page</PaneContainer>;
  }
}

MainPane.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainpane: makeSelectMainPane(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'mainPane', reducer });
const withSaga = injectSaga({ key: 'mainPane', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MainPane);
