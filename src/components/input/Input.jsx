import React from 'react';

function Input({ handleChange, label, id, type, ...otherProps }) {
  return (
    <div className='form__group'>
      <input className='form__input' id={id} onChange={handleChange} type={type} {...otherProps} />
      {label ? (
        <label
          className='form__label'
          htmlFor={otherProps.name}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default Input;
