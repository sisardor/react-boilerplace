/**
 *
 * SideNav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
// import styled from 'styled-components';
import { compose } from 'redux';
import _ from 'lodash';
import injectReducer from 'utils/injectReducer';
import SideNavItem from 'components/SideNavItem';
import makeSelectSideNav, { makeSelectRoute } from './selectors';
import reducer from './reducer';
import SidenavContainer from './SidenavContainer';
import SidenavSection from './SidenavSection';
import SidenavBox from './SidenavBox';

const sidenavMenu = [
  {
    id: 'sidenav.home',
    path: '/admin',
    label: 'Home',
    icon: 'home',
    indent: false,
    disable: false,
    group: 0,
  },
  {
    id: 'sidenav.orders',
    path: '/admin/orders',
    label: 'Orders',
    icon: 'orders',
    indent: false,
    group: 1,
    items: [
      {
        id: 'sidenav.orders.drafts',
        path: '/admin/drafts',
        label: 'Drafts',
        indent: true,
      },
      {
        id: 'sidenav.orders.abandoned',
        path: '/admin/checkouts',
        label: 'Checkouts',
        indent: true,
      },
    ],
  },
  {
    id: 'sidenav.products',
    path: '/admin/products',
    label: 'Products',
    icon: 'tags',
    indent: false,
    disable: false,
    group: 1,
    items: [
      {
        id: 'sidenav.products.transfers',
        path: '/admin/transfers',
        label: 'Transfers',
        indent: true,
      },
      {
        id: 'sidenav.products.inventory',
        path: '/admin/inventory',
        label: 'Inventory',
        indent: true,
      },
      {
        id: 'sidenav.products.collections',
        path: '/admin/collections',
        label: 'Collections',
        indent: true,
      },
    ],
  },
  {
    id: 'sidenav.customers',
    path: '/admin/customer',
    label: 'Customers',
    icon: 'people',
    indent: false,
    disable: false,
    group: 1,
  },
  {
    id: 'sidenav.categories',
    path: '/admin/categories',
    label: 'Categories',
    icon: 'apps',
    indent: false,
    disable: false,
    group: 2,
    items: [
      {
        id: 'sidenav.categories.all',
        path: '/admin/categories/all',
        label: 'All Categories',
        indent: true,
      },
      {
        id: 'sidenav.categories.new',
        path: '/admin/categories/new',
        label: 'Add Category',
        indent: true,
      },
    ],
  },
  {
    id: 'sidenav.comments',
    path: '/admin/comments',
    label: 'Comments',
    icon: 'chatboxes',
    indent: false,
    disable: false,
    group: 2,
  },
];

/* eslint-disable react/prefer-stateless-function */
export class SideNav extends React.Component {
  render() {
    const { location } = this.props.route;
    // console.log(_.groupBy(sidenavMenu, 'group'));
    let yOffset = 0;
    const navBox = [];
    const sidenavGroup = _.groupBy(sidenavMenu, 'group');
    Object.keys(sidenavGroup).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(sidenavGroup, key)) {
        const group = sidenavGroup[key];
        const list = [];
        for (let i = 0; i < group.length; i += 1) {
          const nav = group[i];

          const navProps = {
            path: nav.path,
            icon: nav.icon,
            disable: false,
            yOffset,
            items: [],
          };
          if (nav.path === location.pathname) {
            navProps.isExpanded = true;
          }

          if (nav.items && nav.items.length) {
            for (let j = 0; j < nav.items.length; j += 1) {
              const subnav = nav.items[j];

              const subnavProps = {
                path: subnav.path,
                indent: subnav.indent,
                disable: false,
              };

              if (subnav.path === location.pathname) {
                navProps.isExpanded = true;
              }

              navProps.items.push(
                <SideNavItem
                  key={j}
                  {...subnavProps}
                  globals={{ route: this.props.route }}
                  content={
                    <FormattedMessage
                      id={subnav.id}
                      defaultMessage={subnav.label}
                    />
                  }
                />,
              );
            }
          }

          if (navProps.isExpanded && nav.items) {
            yOffset = 24 * nav.items.length + 8;
          }

          list.push(
            <SideNavItem
              key={i}
              {...navProps}
              globals={{ route: this.props.route }}
              content={
                <FormattedMessage id={nav.id} defaultMessage={nav.label} />
              }
            />,
          );
        }
        navBox.push(
          <SidenavBox key={key}>
            <ul>{list}</ul>
          </SidenavBox>,
        );
      }
    });

    return (
      <SidenavContainer>
        <SidenavSection>{navBox}</SidenavSection>
      </SidenavContainer>
    );
  }
}

SideNav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  route: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  sidenav: makeSelectSideNav(),
  route: makeSelectRoute(),
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

const withReducer = injectReducer({ key: 'sideNav', reducer });

export default compose(
  withReducer,
  withConnect,
)(SideNav);
