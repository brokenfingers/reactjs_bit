import { useReducer, useState } from 'react';
import './App.css';
import colorReducer from './Reducers/colorReducer'
import h1TextReducer from './Reducers/textReducer'
// import rand from './Functions/rand'

function App() {

const [color, dispatchColor] = useReducer(colorReducer, '#ffffff')
const [picked, setPicked] = useState('')

const [h1Text, dispatchText] = useReducer(h1TextReducer, '0000')

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
const doRandom = () => {
    const action = { type: 'make_random'}
    dispatchColor(action)
}   

const onColorPick = (e) => setPicked(e.target.value)


const doRandomText = () => {
    const action = {type: 'random_text', payload: 'sdfsdf'}
    dispatchText(action)
}
const doPick = () => {
   let  action = { type: 'make_pick',
    payload: picked}
    dispatchColor(action)
}   
    return (
      <div className='App'>
          <header className='App-header'>
            <h1 style={{backgroundColor:color}}>{h1Text}</h1>
            <button onClick={doBlack}>Black</button>
            <button onClick={doBlue}>Blue</button>
            <button onClick={doToggle}>Toggle</button>
            <button onClick={doRandom}>Random color</button>
            <button onClick={doPick}>Set picked</button>
            
            <input type='color' onChange={onColorPick} value={picked}></input>

            <button onClick={doRandomText}>Random text</button>
          </header>
      </div>
    );
}

export default App;
