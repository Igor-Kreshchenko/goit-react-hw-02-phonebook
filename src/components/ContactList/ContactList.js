import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import { v4 as uuidv4 } from 'uuid';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { name, number } = contact;
        const id = uuidv4();

        return (
          <li key={id}>
            <ContactItem name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
