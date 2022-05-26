import './App.css'
import {  useState } from 'react';
import Hello from './Components/014/Hello';
import Red from './Components/014/Red';



function App() {
    const [message, setMessage] = useState('')
    const [color, setRed] = useState('white')
    const [color2, setColor2] = useState('white')
    const [afrika, setAfrika] = useState('Hello')

    const labas = () => {
        console.log('Labas')
    }

    const handleExit = () => {
        setMessage('ate')
    }
    const handleExitClear = () => {
        setMessage('')
        setRed('white')
    }
    const handleToggleAte = () => {
        // setMessage(message === '' ? 'ate' : '')
        setMessage(i => i ? '' : 'ate')
    }
    const handleRedAte = () => {
        // setMessage(message === '' ? 'ate' : '')
        setRed('red')
    }

    const handleColor2 = () => {
        setColor2('red');
    }

    const handleAfrika = () => {
        setAfrika('Hello afrika')
    }



    return (
        <div className="App">
            <header className="App-header">
                <h2 style={{color}}>{message}</h2>
                <button onClick={labas}>hi</button>
                <button onClick={handleExit}>say bye</button>
                <button onClick={handleExitClear}>not ate</button>
                <button onClick={handleToggleAte}>toggle ate</button>
                <button  onClick={handleRedAte}>red ate</button>
                <button  onClick={handleAfrika}>afrika</button>

                <Red handleColor2={handleColor2}></Red>
                <Hello afrika={afrika} color={color2}></Hello>
            </header>
        </div>
    )
}

export default App;