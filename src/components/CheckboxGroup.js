import React from 'react';

export default function CheckBoxGroup(props) {
    let checkBoxs = props.input.CheckBoxs;
    return (
      checkBoxs.map(checkBox => (
        <div key={checkBox.Id}>
          <label>
            <input type='checkbox' name={checkBox.Name}/>
            {checkBox.Lable}
          </label>
        </div>
      ))
    );
  };