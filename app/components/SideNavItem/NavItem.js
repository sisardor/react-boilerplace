/**
 *
 * NavItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { AlignItem, IconFlexBox, Box, NavTextSpan } from './Wrapper';

/* eslint-disable react/prefer-stateless-function */
export class NavItem extends React.Component {
  render() {
    const style = {};
    const padding = {
      horizontal: 4,
      vertical: 4,
    };
    if (this.props.indentLevel) {
      style.paddingLeft = 32;
      padding.vertical = 2;
    }

    let textColor = 'dark';
    if (this.props.activeState === 'selected') {
      textColor = 'blue';
    }
    if (this.props.activeState !== 'selected' && this.props.indentLevel) {
      textColor = 'default';
    }
    // if (this.props.activeState === 'hover') {
    //   textColor = 'dark'
    // }

    return (
      <AlignItem padding={padding}>
        <Box style={style}>
          {this.props.icon ? (
            <IconFlexBox>{this.props.icon[this.props.activeState]}</IconFlexBox>
          ) : null}
          <NavTextSpan color={textColor}>{this.props.content}</NavTextSpan>
        </Box>
      </AlignItem>
    );
  }
}

NavItem.propTypes = {
  activeState: PropTypes.string.isRequired,
  icon: PropTypes.object,
  indentLevel: PropTypes.number.isRequired,
  content: PropTypes.object,
};

export default NavItem;
