import React from 'react';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  padding: 30,
  boxSizing: 'border-box',
};

const Center = (props) =>
  <section style={Object.assign(style, props.style)}>
    {props.children}
  </section>
;

export default Center;
