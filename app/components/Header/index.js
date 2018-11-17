/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Alignment, Button, Navbar, NavbarDivider } from '@blueprintjs/core';
import Wrapper from './Wrapper';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  // renderX() {
  //   return <Wrapper className="header">
  //     <strong>Header:</strong> Suspendisse egestas, dui ac egestas mollis, libero orci hendrerit lacus, et malesuada lorem neque ac libero.
  //   </Wrapper>
  // }
  render() {
    return (
      <Wrapper className="header">
        <Navbar className="bp3-darkX">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Gemex</Navbar.Heading>
            <Navbar.Divider />
            <Link to="/">
              <Button className="bp3-minimal" icon="home" text="Home" />
            </Link>
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <Link to="/register">
              <Button className="bp3-minimal" text="Register" />
            </Link>
            <Link to="/login">
              <Button className="bp3-minimal" text="Sign in" />
            </Link>
            <NavbarDivider />
            <Button className="bp3-minimal" icon="shopping-cart" />
          </Navbar.Group>
        </Navbar>
        {/* <FormattedMessage {...messages.header} /> */}
      </Wrapper>
    );
  }
}

Header.propTypes = {};

export default Header;
