import { Wrap } from './App.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrap>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList/>
    </Wrap>
  );
}
export default App;