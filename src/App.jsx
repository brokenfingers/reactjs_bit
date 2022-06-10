import { useState } from 'react';
import './App.css';
import Number3 from './Components/023/Number3';
import Te from './Components/023/Te';

// import { useEffect, useReducer } from 'react';

function App() {


  const [number, setNumber] = useState('0')
  const [number3, setNumber3] = useState('0')
  const [number5, setNumber5] = useState('0')

  
    return (
    <Number3.Provider value={{number3, number5}}>

      <div className='App'>
          <header className='App-header'>
            <h1>Context</h1>
            <button onClick={()=>setNumber(i => ++i)}>Te Va h2</button>
            <button onClick={()=>setNumber3(i => +i+3)}>Te Va h2</button>
            <button onClick={()=>setNumber5(i => +i+5)}>Te Va h2</button>
        
            <Te number={number}></Te>
            <div className='card'>

            </div>
          </header>
      </div>

      </Number3.Provider>
    );
}

export default App;
