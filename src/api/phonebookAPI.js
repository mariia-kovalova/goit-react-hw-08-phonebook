import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const UserAPI = {
  register: async credentials => {
    const { data } = await axios.post('/users/signup', credentials);
    setAuthHeader(data.token);
    return data;
  },
  login: async credentials => {
    const { data } = await axios.post('/users/login', credentials);
    setAuthHeader(data.token);
    return data;
  },
  logout: async () => {
    await axios.post('/users/logout');
    clearAuthHeader();
  },
  refresh: async persistedToken => {
    setAuthHeader(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;
  },
};

export const ContactsAPI = {
  getContacts: async () => {
    const { data } = await axios.get('/contacts');
    return data;
  },
  addContact: async formData => {
    const { data } = await axios.post(`/contacts`, formData);
    return data;
  },
  updateContact: async ({ id, name, number }) => {
    const { data } = await axios.patch(`/contacts/${id}`, {
      name,
      number,
    });
    return data;
  },
  deleteContact: async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  },
};
