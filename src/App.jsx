import './App.css'
import {useState} from 'react';

function App() {

    const [show, setShow] = useState(true)
    const [color, setColor] = useState('blue')
    const [numb, setNumber] = useState(1)
     
    const doShow = () => {
       setShow(s => !s);
    }

    // const setRedFnct = () => {
    //     setColor('red')
    // }

    // const setYellFnct = () => {
    //     setColor('yellow')
    // }

    const setColorfunct = color => {
        setColor(color)
    }

    // const addNumber = () => {
    //     setNumber(s => ++s)
        
    // }
    //  const subtrNumber = () => {
    //     setNumber(s => --s)
        
    // }

    const makeCalc = operator => {
        setNumber(s => eval(`${s}${operator}1`))
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Hook {numb}</h1>
                    {show ? <div className="square" style={{backgroundColor:color}}></div> : null}
                <button onClick={doShow}>show/hide</button>
                <button onClick={() => setColorfunct('red')}>red</button>
                <button onClick={() => setColorfunct('yellow')}>red</button>
                <button onClick={() => setColorfunct('pink')}>red</button>
                
                <button onClick={() => makeCalc('+')}>add number</button>
                <button onClick={() => makeCalc('-')}>subtr number</button>
                
                

            </header>
        </div>
    )
}

export default App;