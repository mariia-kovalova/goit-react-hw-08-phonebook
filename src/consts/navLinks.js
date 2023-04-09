import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from 'consts/routes';

export const navLinks = isLoggedIn => {
  return [
    {
      path: HOME_ROUTE,
      page: 'Home',
      render: true,
    },
    {
      path: CONTACTS_ROUTE,
      page: 'Contacts',
      render: isLoggedIn,
    },
    {
      path: REGISTER_ROUTE,
      page: 'Register',
      render: !isLoggedIn,
    },
    {
      path: LOGIN_ROUTE,
      page: 'Log in',
      render: !isLoggedIn,
    },
  ];
};
