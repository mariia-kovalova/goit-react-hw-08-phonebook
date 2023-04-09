import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: #fff;

  &.active {
    border-bottom: 3px solid #fff;
  }
`;
