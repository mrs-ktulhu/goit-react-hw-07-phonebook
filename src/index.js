import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'components/App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import contactsReducer from 'Redux/contactsSlice';
import filterReducer from 'Redux/filter';
import './index.css';

axios.defaults.baseURL = "https://65535ad15449cfda0f2e8b81.mockapi.io/contacts/contacts";



const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
        <App />
       </Provider>
);