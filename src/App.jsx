import './App.css'
import {useState} from 'react';

function App() {
    
    const [color, setShow] = useState('red')
    const doShow = () => {
        setShow('blue');
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hook</h1>
                <button onClick={doShow}>red/blue</button>
                {
                   <div className="square" style={{backgroundColor:color}}></div>
                }
            </header>
        </div>
    )
}

export default App;