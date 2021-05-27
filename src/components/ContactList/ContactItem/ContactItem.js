import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={onClick} id={id}>
        Delete
      </button>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
