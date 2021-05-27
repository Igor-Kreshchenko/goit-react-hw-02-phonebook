import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({name, number}) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};