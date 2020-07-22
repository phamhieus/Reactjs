import React from 'react';

export default function FileInput(props) {
    return (
        <div>
            <input type='file' name={props.input.Name} />
        </div>
    );
};
