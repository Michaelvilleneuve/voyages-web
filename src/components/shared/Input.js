import React from 'react';

const style = {
  height: 30,
  fontSize: 16,
  width: '100%',
  border: 'none',
  backgroundColor: 'transparent',
  borderBottom: '1px solid #777',
  fontFamily: 'Butler',
  fontWeight: '100',
};

const Input = (props) =>
  <input {...props} style={Object.assign(style, props.style)} />
;

export default Input;
