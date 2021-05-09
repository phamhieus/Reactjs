import todosReducer from './todosSlice'
import filtersReducer from './filtersSlice'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer
})

export default rootReducer 
