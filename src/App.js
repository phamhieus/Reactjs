import './App.css';
import React, {useState} from 'react';
import { createStore } from 'redux';

const initState = {
  value: 0
}

function counterReducer(state=initState, action) {
  switch (action.type) {
    case "counter/incremented":
      state.value = state.value + 1;
      break;
    case "counter/decremented":
      state.value = state.value - 1;
      break;
  }

  return state;
}

function App() {
  const [state, setState] = useState(initState);

  const store = createStore(counterReducer);

  const render = () => {
    const data = store.getState()
    console.log({data})
    state.value = data.value
  }

  store.subscribe(render);

  return (
    <div>
      <p>
        Clicked: <span id="value">{state.value}</span> times
        <button id="increment" onClick={e=> store.dispatch({ type: "counter/incremented" })}>+</button>
        <button id="decrement" onClick={e=> store.dispatch({ type: "counter/decremented" })}>-</button>
        <button id="incrementIfOdd">Increment if odd</button>
        <button id="incrementAsync">Increment async</button>
      </p>
    </div>
  );
}

export default App;
