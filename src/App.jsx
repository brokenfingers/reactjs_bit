import { useState } from 'react';
import './App.css'
import BlueSquare from './Components/007/BlueSquare';

function App() {

    const [cls, setClass] = useState(false);

    const onTitleClick = () => {
        setClass(i => !i);
    }
    

    return (
        <div className="App">
            <header className="App-header">
                <h1 onClick={onTitleClick} style={{letterSpacing: cls ? '10px' : 0}}>Labas</h1>
               <BlueSquare cls={cls}></BlueSquare>
            </header>

        </div>
    )
}

export default App;