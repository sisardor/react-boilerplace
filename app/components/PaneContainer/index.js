/**
 *
 * PaneContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-x: hidden;
  padding-left: calc((50vw - 1390px / 2 + 278px));
  z-index: 0;
  padding-right: 20px;
`;

const ContentPane = styled.div`
  padding-bottom: 48px;
  padding-top: 68px;
  position: relative;
  max-width: 1092px;
  min-width: 760px;
  width: calc(100vw - 278px - 24px);
`;

const CardRoot = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 7px 14px 0 rgba(59, 65, 94, 0.1),
    0 3px 6px 0 rgba(0, 0, 0, 0.07);
  overflow: hidden;
`;

function PaneContainer(props) {
  return (
    <Wrapper>
      <ContentPane>
        <CardRoot>{props.children}</CardRoot>
      </ContentPane>
    </Wrapper>
  );
}

PaneContainer.propTypes = {
  children: PropTypes.any,
};

export default PaneContainer;
