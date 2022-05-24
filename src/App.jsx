import './App.css'
import { useEffect, useState } from 'react';


function App() {

    const [number, setNumber] = useState(null)


    const handleButton = () => {
            setNumber(i => {
                localStorage.setItem('number', i+1)
                return i+1
            })
    }

    useEffect(()=>{
        setNumber(i => +localStorage.getItem('number') ?? 1)
    }, [])


    return (
        <div className="App">
            <header className="App-header">
            <p>{number}</p>
            <button onClick={handleButton}>add</button>
            </header>
        </div>
    )
}

export default App;