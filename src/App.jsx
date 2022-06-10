import { useState } from 'react';
import './App.css';
import Number3 from './Components/023/Number3';
import Number5 from './Components/023/Number5';
import Te from './Components/023/Te';

// import { useEffect, useReducer } from 'react';

function App() {


  const [number, setNumber] = useState('0')
  const [number3, setNumber3] = useState('0')
  const [number5, setNumber5] = useState('0')
  const [number9, setNumber9] = useState('0')

  
    return (
      <Number5.Provider>


    <Number3.Provider value={{number3, number5, setNumber9}}>

      <div className='App'>
          <header className='App-header'>
            <h1>Context</h1>
            <button onClick={()=>setNumber(i => ++i)}>+1</button>
            <button onClick={()=>setNumber3(i => +i+3)}>+3</button>
            <button onClick={()=>setNumber5(i => +i+5)}>+5</button>
            
            <Te number={number}></Te>
            <h2 >{number9}</h2>
            <div className='card'>

            </div>
          </header>
      </div>

      </Number3.Provider>
            </Number5.Provider>
    );
}

export default App;
