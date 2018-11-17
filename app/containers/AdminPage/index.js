/**
 *
 * AdminPage
 *
 */

import React from 'react';
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import SideNav from 'components/SideNav/Loadable';
import MainPane from 'containers/MainPane/Loadable';
import ProductsPane from 'components/ProductsPane/Loadable';
import BalancePane from 'components/BalancePane/Loadable';
import makeSelectAdminPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.scss';

/* eslint-disable react/prefer-stateless-function */
export class AdminPage extends React.Component {
  render() {
    return (
      <div>
        <SideNav />
        <Route exact path="/admin" component={MainPane} />
        <Route exact path="/admin/products" component={ProductsPane} />
        <Route exact path="/admin/balance" component={BalancePane} />
      </div>
    );
  }
}

AdminPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  adminpage: makeSelectAdminPage(),
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

const withReducer = injectReducer({ key: 'adminPage', reducer });
const withSaga = injectSaga({ key: 'adminPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AdminPage);
