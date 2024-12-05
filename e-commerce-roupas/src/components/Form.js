import React from 'react';

const Form = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {children}
    </form>
  );
};

export default Form;
