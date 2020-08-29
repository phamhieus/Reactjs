import React from 'react';
import Header from './Layout/Header';
import Todos from './Todos';
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

    render() {
        return (
            <div>
                <Header />
                <Todos todos={this.state.todos} />
            </div>
        );
    }
}

export default TodoApp;
