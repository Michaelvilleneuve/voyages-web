import React from 'react';
import './Button.css';

const Button = (props) =>
  <button {...props} style={props.style} className="regularButton">
    {props.children}
  </button>
;

export default Button;
