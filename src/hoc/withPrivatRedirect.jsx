import { HOME_ROUTE } from 'consts/routes';
import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const withPrivatRedirect = (Component, redirectTo = HOME_ROUTE) => {
  const ComponentWithRedirect = props => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <Navigate to={redirectTo} /> : <Component {...props} />;
  };

  return ComponentWithRedirect;
};
