/**
 *
 * RegisterPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import RegisterForm from 'components/RegsiterForm/Loadable';
import reducer from './reducer';
import saga from './saga';
import makeSelectRegisterPage from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class RegisterPage extends React.Component {
  render() {
    return <RegisterForm />;
  }
}

// RegisterPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  registerpage: makeSelectRegisterPage(),
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

const withReducer = injectReducer({ key: 'registerPage', reducer });
const withSaga = injectSaga({ key: 'registerPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegisterPage);
