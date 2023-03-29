export const LinksList = isLoggedIn => {
  return [
    {
      path: '/',
      page: 'Home',
      render: true,
    },
    {
      path: '/contacts',
      page: 'Contacts',
      render: isLoggedIn,
    },
    {
      path: '/register',
      page: 'Register',
      render: !isLoggedIn,
    },
    {
      path: '/login',
      page: 'Log in',
      render: !isLoggedIn,
    },
  ];
};
