import React, { useState } from 'react';

import Input from '../input/Input';
import RadioButton from '../radio-button/RadioButton';
import Button from '../button/Button';

function Form() {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleSubmit = event => {
    event.preventDefault();
  }

  const handleChange = event => {
    const { value, name } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='u-margin-bottom-medium'>
        <h2 className='heading-secondary'>Start booking now</h2>
      </div>

      <Input
        type='text'
        name='name'
        id='name'
        label='Full name'
        placeholder='Full name'
        value={user.name}
        handleChange={handleChange}
        required
      />

      <Input
        type='email'
        name='email'
        id='email'
        label='Email'
        placeholder='Email'
        value={user.email}
        handleChange={handleChange}
        required
      />

      <RadioButton id='small' label='Small tour group' name='size' />

      <RadioButton id='large' label='Large tour group' name='size' />

      <div className='form__group u-margin-top-medium'>
        <Button type='submit' color='green'>Next step &rarr;</Button>
      </div>
    </form>
  );
}

export default Form;
