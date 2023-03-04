import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/Services/contacts-api';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.fetchContacts();
      return data;
    } catch (responce) {
      return rejectWithValue(responce.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (responce) {
      return rejectWithValue(responce.data.message);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const normalizedNumber = number;
      const result = contacts.items.find(({ name, number }) => {
        return (
          name.toLowerCase() === normalizedName && number === normalizedNumber
        );
      });

      if (result) {
        alert(`Contact ${name} is already exist!`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch (responce) {
      return rejectWithValue(responce.data.message);
    }
  }
);
