import styled from '@emotion/styled';
import { List } from '@mui/material';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  min-height: calc(100vh - 136px);
`;

export const StyledList = styled(List)`
  padding: 0;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
