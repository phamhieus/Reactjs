import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {
    handleCheckboxChange(){
        console.log('click')
    }
    render() {
        return (
            <div className='container'>
                <ul>
                    {this.props.todos.map(todo => (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo}
                            handleChange={this.handleCheckboxChange}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Todos;
