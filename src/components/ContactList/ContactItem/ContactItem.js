import React from 'react';

const ContactItem = ({name, number}) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
    </>
  );
};

export default ContactItem;