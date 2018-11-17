/**
 *
 * TopNavigator
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  Popover,
  Button,
  H5,
  Classes,
  Intent,
  PopoverInteractionKind,
} from '@blueprintjs/core';

/* eslint-disable react/prefer-stateless-function */
class TopNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  getContents = () => (
    <div key="text">
      <H5>Confirm deletion</H5>
      <p>Are you sure you want to.</p>
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 15 }}
      >
        <Button className={Classes.POPOVER_DISMISS} style={{ marginRight: 10 }}>
          Cancel
        </Button>
        <Button intent={Intent.DANGER} className={Classes.POPOVER_DISMISS}>
          Delete
        </Button>
      </div>
    </div>
  );
  render() {
    return (
      <div>
        <ul className="nav">
          <li key="1">
            <Popover
              position="bottom-left"
              minimal
              interactionKind={PopoverInteractionKind.HOVER}
              enforceFocus={false}
              isOpen={this.state.isOpen === true ? true : undefined}
            >
              <div className="nav-item">Jewellery & Accessories</div>
              {this.getContents()}
            </Popover>
          </li>
          <li key="2">
            <Popover
              position="bottom-left"
              minimal
              interactionKind={PopoverInteractionKind.HOVER}
              enforceFocus={false}
              isOpen={this.state.isOpen === true ? true : undefined}
            >
              <div className="nav-item">Clothing & Shoes</div>
              {this.getContents()}
            </Popover>
          </li>
        </ul>
      </div>
    );
  }
}

TopNavigator.propTypes = {};

export default TopNavigator;
