import { useReducer } from 'react';
import './App.css';
import colorReducer from './Reducers/colorReducer'


function App() {

const [color, dispatchColor] = useReducer(colorReducer, 'yellow')

const doBlack = () => {
    const action = {
        type: 'make_black'
    }
    dispatchColor(action)
}

const doBlue = () => {
    const action = { type: 'make_blue'}
    dispatchColor(action)
}
const doToggle = () => {
    const action = { type: 'make_toggle'}
    dispatchColor(action)
}   
    return (
      <div className='App'>
          <header className='App-header'>
            <h1 style={{backgroundColor:color}}>Reducer</h1>
            <button onClick={doBlack}>Black</button>
            <button onClick={doBlue}>Blue</button>
            <button onClick={doToggle}>Toggle</button>
          </header>
      </div>
    );
}

export default App;
