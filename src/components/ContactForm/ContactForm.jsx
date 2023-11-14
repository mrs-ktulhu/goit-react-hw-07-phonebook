import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/contactsSlice';
import { Container, FormInput, SubmitButton } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsSelector = useSelector((state) => state.contacts);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    if (contactsSelector.items.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, phone }));
    form.reset();
  }, [contactsSelector.items, dispatch]);

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
            required
          />
        </FormInput>
        <br />
        <FormInput>
          phone
          <br />
          <input
            type="tel"
            placeholder="Enter phone"
            name="phone"
            required
          />
        </FormInput>
        <br />
        <SubmitButton type="submit" >Add contact</SubmitButton>
      </form>
    </Container>
  );
}
export default ContactForm;
