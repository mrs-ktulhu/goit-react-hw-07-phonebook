import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'Redux/selector';
import  ContactListItem  from './ContactListItem';
import { ContactsList } from './ContactList.styled';

  const getFilteredContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);
  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          text={name}
          number={number}
        />
      ))}
    </ContactsList>
  );
};

export default ContactList;