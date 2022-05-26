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

    return (
        <div className="App">
            <header className="App-header">
                <h2>{message}</h2>
                <button onClick={labas}>hi</button>
                <button onClick={handleExit }>say bye</button>
            </header>
        </div>
    )
}

export default App;