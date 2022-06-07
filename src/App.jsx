import { useReducer, useState } from 'react';
import './App.css';
import colorReducer from './Reducers/colorReducer'
import listReducer from './Reducers/listReducer';
import textReducer from './Reducers/textReducer'
// import rand from './Functions/rand'

function App() {

const [color, dispatchColor] = useReducer(colorReducer, '#ffffff')
const [picked, setPicked] = useState('#ffffff')
const [inputText, setInputText] = useState('')
const [h1Text, dispatchText] = useReducer(textReducer, '0000')

const [list, dispatchList] = useReducer(listReducer, [])

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
const handleInputText = (e) => setInputText(e.target.value)
const doPick = () => {
   let  action = { type: 'make_pick',
    payload: picked}
    dispatchColor(action)
}   

const doInputText = () => {
    const action = {type: 'input_text', payload: inputText}
    dispatchText(action)
}

const doRandomText = () => {
    const action = {type: 'random_text'}
    dispatchText(action)
}

const handleCreateList = () => {
    const action =  {type : "generate_list"}
    dispatchList(action)
  
}
const handleSort = () => {
    const action =  {type : "sort_list"}
    dispatchList(action)
}

    return (
      <div className='App'>
          <header className='App-header'>
              <div className='card'>
                <h1 style={{backgroundColor:color}}>{h1Text}</h1>
                <button onClick={doBlack}>Black</button>
                <button onClick={doBlue}>Blue</button>
                <button onClick={doToggle}>Toggle</button>
                <button onClick={doRandom}>Random color</button>
                <button onClick={doPick}>Set picked</button>

                <input type='color' onChange={onColorPick} value={picked}></input>
              </div>
            
            <div className='card'>
                <input type='text' value={inputText} onChange={handleInputText}/>
            <button onClick={doInputText}>Set input text</button>
            <button onClick={doRandomText}>Random text</button>
            <button onClick={handleCreateList}>Create list</button>
            <button onClick={handleSort}>Sort list</button>
            {
                list && list.map((itm, i) => <div key={i}>{itm}</div>)
            }
            </div>
            


            
          </header>
      </div>
    );
}

export default App;
