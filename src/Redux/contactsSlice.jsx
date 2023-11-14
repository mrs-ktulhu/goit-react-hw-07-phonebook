import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get('https://65535ad15449cfda0f2e8b81.mockapi.io/contacts/contacts');
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async ({ name, phone }) => {
  try {
    const response = await axios.post('https://65535ad15449cfda0f2e8b81.mockapi.io/contacts/contacts', {
      name,
      phone,
    });
    return response.data;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  try {
    await axios.delete(`https://65535ad15449cfda0f2e8b81.mockapi.io/contacts/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
});


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: contactsActions, reducer: contactsReducer } = contactsSlice;
export default contactsReducer;
