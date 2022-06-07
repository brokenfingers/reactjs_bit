import { useReducer, useState } from 'react';
import './App.css';
import colorReducer from './Reducers/colorReducer'
import listReducer from './Reducers/listReducer';
import textReducer from './Reducers/textReducer'


function App() {

const [color, dispatchColor] = useReducer(colorReducer, '#ffffff')
const [picked, setPicked] = useState('#ffffff')
const [inputText, setInputText] = useState('')
const [h1Text, dispatchText] = useReducer(textReducer, '0000')

const [list, dispatchList] = useReducer(listReducer, [])

const onColorPick = (e) => setPicked(e.target.value)
const handleInputText = (e) => setInputText(e.target.value)
const handleColor = (type, payload=null) =>  dispatchColor({type, payload})
const handleText = (type, payload=null) => dispatchText({type, payload})
const handleList = (type) => dispatchList({type})

    return (
      <div className='App'>
          <header className='App-header'>
              <div className='card'>
                <h1 style={{backgroundColor:color}}>{h1Text}</h1>
                <button onClick={()=>handleColor('make_black')}>Black</button>
                <button onClick={()=>handleColor('make_blue')}>Blue</button>
                <button onClick={()=>handleColor('make_toggle')}>Toggle</button>
                <button onClick={()=>handleColor('make_random')}>Random color</button>
                <button onClick={()=>handleColor('make_pick', picked)}>Set picked</button>

                <input type='color' onChange={onColorPick} value={picked}></input>
                <input type='text' value={inputText} onChange={handleInputText}/>

                <button onClick={()=>handleText('input_text', inputText)}>Set input text</button>
                <button onClick={()=>handleText('random_text')}>Random text</button>
              </div>
            
            <div className='card'>
                

            <button onClick={()=>handleList('generate_list')}>Create list</button>
            <button onClick={()=>handleList('add_blackToList') }>Add black</button>
            <button onClick={()=>handleList('sort_list') }>Sort list</button>
            <button onClick={()=>handleList('higher_than_500') }>Filter higher than 500</button>
            <button onClick={()=>handleList('lower_than_400') }>Filter less than 400</button>
            {
                list && list.map((itm, i) => itm.show && <div key={i} style={{color:itm.color}}>{itm.number}</div>)
            }
            </div>
            


            
          </header>
      </div>
    );
}

export default App;
