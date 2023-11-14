import { Wrap } from './App.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'Redux/selector';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter)

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Wrap>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={filterContacts}/>
    </Wrap>
  );
}
