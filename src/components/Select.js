import React from 'react';

export default function Select(props) {
    return (
        <select name={props.input.Name}>
            {
                Array.from(new Array(100), (v, index) => <option key={index} value={index}>{index} tuổi</option>)
            }
        </select>
    );
}
