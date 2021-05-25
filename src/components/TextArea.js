import React from 'react';

export default function TextArea(props) {
  console.log({props})
  return (
    <textarea name={props.input.Name}></textarea>
  );
};
