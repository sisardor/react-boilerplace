/**
 *
 * SideNavIcon
 *
 */

// import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import home from 'images/home.svg';
import balance from 'images/balance.svg';
import homeH from 'images/home-highlighted.svg';
import homeS from 'images/home-selected.svg';
import balanceH from 'images/balance-highlighted.svg';
import balanceS from 'images/balance-selected.svg';

import payments from 'images/payments.svg';
import paymentsH from 'images/payments-highlighted.svg';
import paymentsS from 'images/payments-selected.svg';

import orders from 'images/orders.svg';
import ordersH from 'images/orders-highlighted.svg';
import ordersS from 'images/orders-selected.svg';

import customers from 'images/customers.svg';
import customersH from 'images/customers-highlighted.svg';
import customersS from 'images/customers-selected.svg';

import tags from 'images/tags.svg';
import tagsH from 'images/tags-highlighted.svg';
import tagsS from 'images/tags-selected.svg';

import apps from 'images/apps.svg';
import appsH from 'images/apps-highlighted.svg';
import appsS from 'images/apps-selected.svg';

import chatboxes from 'images/chatboxes.svg';
import chatboxesH from 'images/chatboxes-highlighted.svg';
import chatboxesS from 'images/chatboxes-selected.svg';

import people from 'images/people.svg';
import peopleH from 'images/people-highlighted.svg';
import peopleS from 'images/people-selected.svg';

import comment from 'images/comment.svg';
import commentH from 'images/comment-highlighted.svg';
import commentS from 'images/comment-selected.svg';

const icons = {
  home,
  'home-highlighted': homeH,
  'home-selected': homeS,
  balance,
  'balance-highlighted': balanceH,
  'balance-selected': balanceS,
  payments,
  'payments-highlighted': paymentsH,
  'payments-selected': paymentsS,
  orders,
  'orders-highlighted': ordersH,
  'orders-selected': ordersS,
  customers,
  'customers-highlighted': customersH,
  'customers-selected': customersS,
  tags,
  'tags-highlighted': tagsH,
  'tags-selected': tagsS,
  apps,
  'apps-highlighted': appsH,
  'apps-selected': appsS,
  chatboxes,
  'chatboxes-highlighted': chatboxesH,
  'chatboxes-selected': chatboxesS,
  people,
  'people-highlighted': peopleH,
  'people-selected': peopleS,
  comment,
  'comment-highlighted': commentH,
  'comment-selected': commentS,
};

const SideNavIcon = styled.span`
  background-image: url(${props => {
    if (props.highlighted) {
      return icons[`${props.name}-highlighted`];
    } else if (props.selected) {
      return icons[`${props.name}-selected`];
    }
    return icons[props.name];
  }});
  background-color: transparent;
  background-size: 20px 20px;
  height: 20px;
  width: 20px;
`;

SideNavIcon.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  highlighted: PropTypes.bool,
};

export default SideNavIcon;
