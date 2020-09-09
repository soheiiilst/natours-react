import React from 'react';

function RadioButton({ id, label, ...otherProps}) {
  return (
    <div className='form__radio-group'>
      <input type='radio' className='form__radio-input' id={id} {...otherProps} />
      <label htmlFor={id} className='form__radio-label'>
        <span className="form__radio-button"></span>
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
