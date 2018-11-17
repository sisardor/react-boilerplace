/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// import LoginForm from 'components/LoginForm/Loadable';
import { Card, Tag, Elevation } from '@blueprintjs/core';
import products from './products.json'

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  onRemove = () => {};
  render() {
    // const list = [];
    const list = products.map((product, index) => {
      return (
        <div key={index}><img src={product.thumb} /></div>
      );
    })

    return (
      <div className="container">
        <main className="content">
          <div>
            <Tag onRemove={true && this.onRemove}>Text</Tag>
          </div>
          <div className="grid-container">{list}</div>
        </main>
      </div>
    );
  }
}
