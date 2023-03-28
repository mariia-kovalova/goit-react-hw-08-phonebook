import styled from '@emotion/styled';
import { ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: white;

  &.active {
    border-bottom: 2px solid white;
  }
`;

export const StyledListItem = styled(ListItem)`
  flex-basis: 30px;
`;
