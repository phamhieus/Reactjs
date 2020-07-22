import React from 'react';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import TextField from '../components/TextField';
import RadioGroup from '../components/RadioGroup';
import CheckboxGroup from '../components/CheckboxGroup';
import FileInput from '../components/FileInput';

export default function Row(props) {
    let element;
    if (props.Row.Type === 'select') {
        element = <Select input={props.Row} />;
    } else if (props.Row.Type === 'radio') {
        element = <RadioGroup input={props.Row} />
    } else if (props.Row.Type === 'text' || props.Row.Type === 'password') {
        element = <TextField input={props.Row} />
    } else if (props.Row.Type === 'checkbox') {
        element = <CheckboxGroup input={props.Row} />
    } else if (props.Row.Type === 'file') {
        element = <FileInput input={props.Row} />
    } else if (props.Row.Type === 'textarea') {
        element = <TextArea input={props.Row} />;
    } else {
        element = <div></div>
    }

    return (
        <tr>
            <td>{props.Row.Description}</td>
            <td>
                {element}
            </td>
        </tr>
    );
};
