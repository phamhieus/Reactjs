import React from 'react';

class TodoItem extends React.Component {
    render() {
        const {completed, id, title} = this.props.todo
        return (
            <li className="todo-item">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={()=>this.props.handleChange(id)}
                />
                <span className={completed?'completed':''}>
                    {title}
                </span>
                <button type="button" className="btn-style">X</button>
            </li>
        )
    }
}

export default TodoItem;
