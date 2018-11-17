/**
 *
 * SideNavItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { CSSTransitionGroup } from 'react-transition-group';
import injectReducer from 'utils/injectReducer';
import SideNavIcon from 'components/SideNavIcon';
import Interactive from './Interactive';
import NavItem from './NavItem';
import { A, SubSideNav } from './Wrapper';
import makeSelectSideNavItem from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class SideNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // focus: false,
      mouse: 'none',
    };

    this.updateMouse = this.updateMouse.bind(this);
  }

  updateMouse(value) {
    this.setState({
      mouse: value,
    });
  }

  render() {
    let icon = null;
    if (this.props.icon) {
      icon = {
        default: <SideNavIcon name={this.props.icon} />,
        hover: <SideNavIcon name={this.props.icon} highlighted />,
        selected: <SideNavIcon name={this.props.icon} selected />,
      };
    }
    let activeState =
      this.state.mouse === 'none' ? 'default' : this.state.mouse;
    if (this.props.path === this.props.globals.route.location.pathname) {
      activeState = 'selected';
    }

    let style = null;
    let subnav = null;
    if (Object.prototype.hasOwnProperty.call(this.props, 'yOffset')) {
      style = {
        transform: `translateY(${this.props.yOffset}px)`,
        transition: 'transform 100ms cubic-bezier(0.7, 0, 0.3, 1) 0s',
      };
    }

    if (this.props.isExpanded) {
      subnav = <ul style={{ marginBottom: 8 }}>{this.props.items}</ul>;
    }

    const indentLevel = this.props.indent ? 1 : 0;
    return (
      <li style={style}>
        <A to={this.props.path}>
          <Interactive updateMouse={this.updateMouse}>
            <NavItem
              activeState={activeState}
              icon={icon}
              indentLevel={indentLevel}
              content={this.props.content}
            />
          </Interactive>
        </A>
        <SubSideNav>
          
            {subnav}
          
        </SubSideNav>
      </li>
    );
  }
}

SideNavItem.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  icon: PropTypes.string,
  path: PropTypes.string.isRequired,
  globals: PropTypes.object,
  yOffset: PropTypes.number,
  indent: PropTypes.bool,
  isExpanded: PropTypes.bool,
  items: PropTypes.array,
  content: PropTypes.object,
  // disable: PropTypes.bool.isRequired,
};

// const mapStateToProps = getNavItem()
const mapStateToProps = createStructuredSelector({
  sidenavitem: makeSelectSideNavItem(),
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

const withReducer = injectReducer({ key: 'sideNavItem', reducer });

export default compose(
  withReducer,
  withConnect,
)(SideNavItem);
