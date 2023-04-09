import { HOME_ROUTE } from 'consts/routes';
import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const withAuthRedirect = (Component, redirectTo = HOME_ROUTE) => {
  const ComponentWithRedirect = props => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? (
      <Navigate to={redirectTo} />
    ) : (
      <Component {...props} />
    );
  };

  return ComponentWithRedirect;
};
