import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://64027bf6302b5d671c3b5214.mockapi.io/contacts',
});

export const fetchContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
