/**
 *
 * Interactive
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
export class Interactive extends React.Component {
  mouseOut() {
    if (this.props.updateMouse) {
      this.props.updateMouse('none');
    }
  }

  mouseOver() {
    if (this.props.updateMouse) {
      this.props.updateMouse('hover');
    }
  }

  render() {
    return (
      <div
        onMouseOver={() => this.mouseOver()}
        onMouseOut={() => this.mouseOut()}
        onFocus={() => undefined}
        onBlur={() => undefined}
      >
        {this.props.children}
      </div>
    );
  }
}

Interactive.propTypes = {
  updateMouse: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Interactive;
