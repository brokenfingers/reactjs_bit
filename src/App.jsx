import { useState } from 'react';
import './App.css'
import BlueSquare from './Components/007/BlueSquare';

function App() {

    const [cls, setClass] = useState(false);

    const [nosis, setNosis] = useState(false);

    const onTitleClick = () => {
        setClass(i => !i);
    }

    const onButtonNosis = () => {
        setNosis(true);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 onClick={onTitleClick} style={{letterSpacing: cls ? '10px' : 0}}>Labas</h1>
               <BlueSquare cls={cls} nosis={nosis}></BlueSquare>
               <button onClick={onButtonNosis} style={{position:'absolute', top: 0, left:0}}>Nosis </button>
            </header>

        </div>
    )
}

export default App;