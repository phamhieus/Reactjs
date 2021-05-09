import './App.css'
import React from 'react'

import store from './store'
import { Provider } from 'react-redux'

import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <nav>
          <section>
            <h1>To do app</h1>
          </section>
        </nav>
        <main>
          <section className="medium-container">
            <h2>Todos</h2>
            <div className="todoapp">
              <Header />
              <TodoList />
              <Footer />
            </div>
          </section>
        </main>
      </div>
    </Provider>
  );
}

export default App
