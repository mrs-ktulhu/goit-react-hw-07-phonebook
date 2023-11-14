import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/contactsSlice';
import { selectContacts } from '../../Redux/selector';
import { nanoid } from 'nanoid';
import { Container, FormInput, SubmitButton } from './ContactForm.styled';

export default function ContactForm () {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormInput>
          Name
          <br />
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            id={nanoid()}
            required
          />
        </FormInput>
        <br />
        <FormInput>
          Number
          <br />
          <input
            type="tel"
            placeholder="Enter number"
            name="number"
            id={nanoid()}
            required
          />
        </FormInput>
        <br />
        <SubmitButton type="submit" >Add contact</SubmitButton>
      </form>
    </Container>
  );
}
