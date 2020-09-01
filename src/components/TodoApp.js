import React from 'react';
import Header from './Layout/Header';
import Todos from './Todos';
import AddTodo from './AddToDo'
import uuid from 'uuid'

class TodoApp extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Setup develop environment',
                completed: true
            },
            {
                id: 2,
                title: 'Develop website and add content',
                completed: false
            },
            {
                id: 3,
                title: 'Deloy to live server',
                completed: false
            }
        ]
    };

    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
         });
    }

    deleteTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
    }

    handleCheckboxChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos}  
                    handleCheckboxChange={this.handleCheckboxChange} 
                    deleteTodo={this.deleteTodo}/>
            </div>
        );
    }
}

export default TodoApp;
