// src/components/ContactList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import { ListContainer, ContactItemWrapper } from '../styles/ContactListStyles';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <ListContainer>
      {contacts.map(contact => (
        <ContactItemWrapper key={contact.id}>
          <ContactItem contact={contact} />
        </ContactItemWrapper>
      ))}
    </ListContainer>
  );
};

export default ContactList;
