import './App.css'
import { useEffect, useState } from 'react';


function App() {
    const labas = () => {
        console.log('Labas')
    }

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={labas}></button>
            </header>
        </div>
    )
}

export default App;