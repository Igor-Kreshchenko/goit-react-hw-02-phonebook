import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => {
        const { id, name, number } = contact;

        return (
          <li className={styles.item} key={id}>
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
