import React from 'react';

function Button({ color, animated, children }) {
  return (
    <button
      className={`btn ${color ? 'btn--' + color : ''} ${
        animated ? 'btn--animated' : ''
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
