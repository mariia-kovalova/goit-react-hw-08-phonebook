import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectTheme } from 'redux/theme/selectors';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: white;

  &.active {
    border-bottom: 3px solid
      ${() => {
        const { mode } = useSelector(selectTheme);

        return mode === 'light' ? '#fff' : '#009688';
      }};
  }
`;
