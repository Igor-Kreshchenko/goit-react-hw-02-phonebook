import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;

        return (
          <li key={id}>
            <ContactItem
              id={id}
              name={name}
              number={number}
              onClick={onClick}
            />
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
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
