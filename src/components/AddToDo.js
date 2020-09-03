import React, { useState } from 'react'

function AddTodo(props) {

    const [title, setTitle] = useState('')

    const onInputChange = (event) => {
        setTitle(event.target.value)
    }

    const addToDo = (event) => {
        event.preventDefault()
        this.props.addTodo(title)
        setTitle('')
    }

    return (
        <form className='form-container' onSubmit={addToDo}>
            <input
                type='text'
                placeholder='Add Todo...'
                value={title} className='input-text'
                onChange={onInputChange}
            />
            <input type='submit' className='input-submit' />
        </form>
    );
}

export default AddTodo
