import React from 'react';

export default function RadioGroup(props) {
  let radios = props.input.Radios;
  return (
    radios.map(radio => (
      <div key={radio.Id}>
        <label>
          <input type='radio' name={radio.Name}/>
          {radio.Lable}
        </label>
      </div>
    ))
  );
};
