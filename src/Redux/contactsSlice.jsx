import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialContactsState = [];
const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = contactSlice.actions;
export const contacts = contactSlice.reducer;