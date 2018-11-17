/**
 *
 * Footer
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper className="footer">
      <strong>Footer:</strong> <FormattedMessage {...messages.header} />
    </Wrapper>
  );
}

export default Footer;
