import React from 'react'

class AddTodo extends React.Component{
    state = {
        title: ''
    }

    onInputChange = (event)=>{
        this.setState({
            title: event.target.value
        })
    }

    addToDo = (event)=>{
        event.preventDefault()
        let {title} = this.state
        this.props.addTodo(title)
        this.setState({
            title: ''
        })
    }

    render(){
        return (
            <form className='form-container' onSubmit={this.addToDo}>
                <input 
                    type='text' 
                    placeholder='Add Todo...' 
                    value={this.state.title} className='input-text'
                    onChange={this.onInputChange}
                />
                <input type='submit' className='input-submit'/>
            </form>
        );
    }
}

export default AddTodo
