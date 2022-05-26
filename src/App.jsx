import './App.css'
import { useEffect, useState } from 'react';


function App() {
    const [message, setMessage] = useState('')
    const labas = () => {
        console.log('Labas')
    }

    const handleExit = () => {
        setMessage('ate')
    }
    const handleExitClear = () => {
        setMessage('')
    }
    const handleToggleAte = () => {
        setMessage(message === '' ? 'ate' : '')
    }

    return (
        <div className="App">
            <header className="App-header">
                <h2>{message}</h2>
                <button onClick={labas}>hi</button>
                <button onClick={handleExit}>say bye</button>
                <button onClick={handleExitClear}>not ate</button>
                <button onClick={handleToggleAte}>toggle ate</button>
            </header>
        </div>
    )
}

export default App;