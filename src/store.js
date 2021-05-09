import { createStore } from 'redux'
import rootReducer from './reducers/reducer'

let preloadedState
const persistedTodoString = localStorage.getItem('todos')

if (persistedTodoString) {
  preloadedState = {
    todos: JSON.parse(persistedTodoString)
  }
}

const store = createStore(rootReducer, preloadedState)

export default store
