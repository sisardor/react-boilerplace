import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  position: relative;
`;
const A = styled(Link)`
  color: #586ada;
  text-decoration: none;
  font-weight: 500;

  :hover {
    color: #2b2d50;
    text-decoration: none;
  }
`;

const AlignItem = styled.div`
  padding-left: ${props => props.padding.horizontal}px;
  padding-right: ${props => props.padding.horizontal}px;
  padding-bottom: ${props => props.padding.vertical}px;
  padding-top: ${props => props.padding.vertical}px;
  background-color: #e3e8ee;
  align-items: center;
  display: flex;
`;

const NavItem = styled.div`
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
  background-color: #e3e8ee;
`;

const IconFlexBox = styled.div`
  align-items: center;
  display: flex;
  margin-right: 12px;
`;

const NavTextSpan = styled.span`
  white-space: normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Helvetica Neue', 'Ubuntu', sans-serif;
  line-height: 20px;
  font-weight: ${props => (props.color === 'blue' ? 700 : 400)};
  font-size: 14px;
  display: inline;
  color: ${props => {
    if (props.color === 'blue') return '#586ada';
    else if (props.color === 'dark') return '#2b2d50';
    return '#4e566d';
  }};
`;

const SubSideNav = styled.div`
  position: absolute;
  top: 28px;
  right: 0;
  left: 0;
`;

const Box = styled.div`
  display: flex;
`;
export { A, AlignItem, NavItem, IconFlexBox, NavTextSpan, SubSideNav, Box };
export default Wrapper;
