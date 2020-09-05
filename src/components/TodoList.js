import React from 'react'
import Todo from './Todo'

const TodoList = (props) => (
    <ul>
        {props.todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={()=>props.toggleTodo(todo.id)}
            />
        )}

    </ul>
)
export default TodoList
