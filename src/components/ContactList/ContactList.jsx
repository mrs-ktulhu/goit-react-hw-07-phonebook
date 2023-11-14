import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts,deleteContact } from 'Redux/contactsSlice';
import ContactListItem from './ContactListItem';
import { ContactsList } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const isFiltered = filter !== '';
  const hasContacts = filteredContacts.length > 0;

  return (
    <div>
      {hasContacts ? (
        <ContactsList>
          {filteredContacts.map(contact => (
            <ContactListItem
              key={contact.id}
              id={contact.id}
              text={contact.name}
              phone={contact.phone}
              onDelete={handleDelete}
            />
          ))}
        </ContactsList>
      ) : (
        isFiltered && <p>No contacts found</p>
      )}
    </div>
  );
};

export default ContactList;
