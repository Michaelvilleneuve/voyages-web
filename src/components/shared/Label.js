import React from 'react';

const style = {
  marginTop: 10,
  display: 'inline-block'
};

const Label = (props) =>
  <label htmlFor={props.htmlFor} style={Object.assign(style, props.style)}>
    {props.children}
  </label>
;

export default Label;
