import './App.css'
import {useState} from 'react';

function App() {
    
    const [show, setShow] = useState(true)
    const doShow = () => {
        setShow(s => !s);
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hook</h1>
                <button onClick={doShow}>red/blue</button>
                {
                    show ?   <div className="square" style={{backgroundColor:'red'}}></div> : <div className="square" style={{backgroundColor:'blue'}}></div>
                }
            </header>
        </div>
    )
}

export default App;