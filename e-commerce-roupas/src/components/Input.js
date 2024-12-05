import React from 'react';

const Input = ({ label, value, onChange, type = 'text', placeholder, required }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
};

export default Input;
