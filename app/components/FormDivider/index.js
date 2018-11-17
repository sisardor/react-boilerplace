/**
 *
 * FormDivider
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  border-bottom: 1px solid #e1e3df;
  line-height: 0;
  margin-bottom: 24px;
  margin-top: 24px;
`;
const Span = styled.span`
  vertical-align: bottom;
  background-color: #fff;
  padding: 12px;
`;

function FormDivider() {
  return (
    <Wrapper className="bp3-ui-text bp3-text-small">
      <Span>OR</Span>
    </Wrapper>
  );
}

FormDivider.propTypes = {};

export default FormDivider;
