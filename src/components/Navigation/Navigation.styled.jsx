import styled from '@emotion/styled';
import { theme } from 'components/theam';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: white;

  &.active {
    border-bottom: 3px solid
      ${theme.mode === 'light'
        ? theme.palette.common.white
        : theme.palette.primary[500]};
  }
`;
