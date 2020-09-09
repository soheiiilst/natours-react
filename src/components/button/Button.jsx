import React from 'react';

function Button({ color, animated, children, type }) {
  return (
    <button
      className={`btn ${color ? 'btn--' + color : ''} ${
        animated ? 'btn--animated' : ''
      }`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
