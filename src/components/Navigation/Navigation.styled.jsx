import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: white;

  &.active {
    border-bottom: 3px solid
      ${() => {
        const mode = useSelector(selectTheme);

        return mode === 'light'
          ? 'theme.palette.common.white'
          : 'theme.palette.primary[500]';
      }};
  }
`;
