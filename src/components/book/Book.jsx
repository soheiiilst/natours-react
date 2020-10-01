import React from 'react';

import Form from '../form/Form';

function Book() {
  return (
    <div
      className='book'
      // style={{
      //   backgroundImage: `linear-gradient(105deg,
      //                                     rgba(255, 255, 255, 0.9) 0%,
      //                                     rgba(255, 255, 255, 0.9) 50%,
      //                                     transparent 50%), 
      //                                     url('img/nat-10.jpg')`
      // }}
    >
      <div className="book__form">
        <Form />
      </div>
    </div>
  );
}

export default Book;
