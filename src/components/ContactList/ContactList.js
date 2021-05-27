import React from 'react';
import ContactItem from './ContactItem';
import { v4 as uuidv4 } from 'uuid';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const id = uuidv4();

        return (
          <li key={id}>
            <ContactItem name={contact.name} number={contact.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
