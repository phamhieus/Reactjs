import React from 'react'
import Footer from './Footer'
import AddTodo from '../redux/containers/AddTodo'
import VisibleTodoList from '../redux/containers/VisibleTodoList'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App
