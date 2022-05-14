import './App.css'
import {useState} from 'react';

function App() {
    const arr = [1]
    const [show, setShow] = useState(true)
    const [color, setColor] = useState('blue')
    const [numb, setNumber] = useState(1)
     
    const doShow = () => {
       setShow(s => !s);
    }

    const setRedFnct = () => {
        setColor('red')
    }

    const setYellFnct = () => {
        setColor('yellow')
    }

    const addNumber = () => {
        setNumber(s => ++s)
        
    }
     const subtrNumber = () => {
        setNumber(s => --s)
        
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hook {numb}</h1>
                    {show ? <div className="square" style={{backgroundColor:color}}></div> : null}
                <button onClick={doShow}>show/hide</button>
                <button onClick={setRedFnct}>red</button>
                <button onClick={setYellFnct}>yellow</button>
                <button onClick={addNumber}>add number</button>
                <button onClick={subtrNumber}>subtr number</button>
                

            </header>
        </div>
    )
}

export default App;