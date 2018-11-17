/**
 *
 * LoginForm
 *
 */

import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Card,
  Elevation,
  FormGroup,
  InputGroup,
} from '@blueprintjs/core';
import { FormattedMessage } from 'react-intl';
import FormDivider from 'components/FormDivider';
import Fsvg from 'images/facebook.svg';
import Gsvg from 'images/google.svg';
import messages from './messages';

const Wrapper = styled.div`
  width: 400px;
  margin: 20px auto;
`;

const CheckboxSpan = styled.span`
  &:before {
    vertical-align: top;
  }
`;
const CheckboxLabel = styled.label`
  float: left;
  font-size: 12px;
`;

/* eslint-disable react/prefer-stateless-function */
class LoginForm extends React.Component {
  state = {
    label: false,
    helperText: false,
    isLoading: false,
  };

  loading = () => {
    this.setState({ isLoading: true });
  };

  handleEnabledChange = () => {};

  render() {
    const { label, helperText, isLoading } = this.state;
    const tmp = true;
    return (
      <Wrapper>
        <Card interactive={false} elevation={Elevation.TWO}>
          <h1 style={{ textAlign: 'center' }}>
            <FormattedMessage {...messages.welcome} />
          </h1>
          <FormGroup
            helperText={helperText && 'Helper text with details...'}
            label={label && 'Label'}
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup id="text-input" large placeholder="Email Address*" />
          </FormGroup>
          <FormGroup
            helperText={helperText && 'Helper text with details...'}
            label={label && 'Label'}
            labelFor="password-input"
            labelInfo="(required)"
          >
            <InputGroup
              large
              id="password-input"
              placeholder="Password*"
              type="password"
            />
          </FormGroup>
          <FormGroup>
            <CheckboxLabel className="bp3-control bp3-checkbox bp3-ui-text bp3-text-smal">
              <input type="checkbox" />
              <CheckboxSpan className="bp3-control-indicator" />
              Stay signed in
            </CheckboxLabel>
            <p
              className="bp3-ui-text bp3-text-small"
              style={{ textAlign: 'end', marginTop: 7 }}
            >
              <a href="/forgot">Forget your password?</a>
            </p>
          </FormGroup>

          <FormGroup>
            <Button
              fill={tmp}
              intent="primary"
              large
              loading={isLoading}
              text={<FormattedMessage {...messages.signin} />}
              onClick={this.loading}
            />
          </FormGroup>
          <FormDivider />
          <FormGroup>
            <Button
              fill={tmp}
              large
              icon={<img src={Gsvg} alt="" />}
              text="Continue with Google"
              onClick={this.loading}
            />
          </FormGroup>
          <FormGroup>
            <Button
              fill={tmp}
              large
              icon={<img src={Fsvg} alt="" />}
              text="Continue with Faceboo"
              onClick={this.loading}
            />
          </FormGroup>
          <p className="bp3-ui-text bp3-text-small bp3-running-text">
            <FormattedMessage {...messages.legal} />
          </p>
        </Card>
      </Wrapper>
    );
  }
}

LoginForm.propTypes = {};

export default LoginForm;
