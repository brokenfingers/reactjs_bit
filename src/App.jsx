import './App.css'
import Buttnon from './Components/008/Buttnon';
import Green from './Components/008/Green';
import { useState} from 'react'

function App() {

    const [bgColor, setColor] = useState('pink')
    const [numbr, setIncrease] = useState(1)
    const [redBg, setRedBg] = useState(null)

    const onSetColor = () => {
        setColor(i => i === 'pink' ? 'green' : 'pink');
    }

    const onSetIncrease = () => {
        setIncrease(i => redBg === 'red' ? --i : ++i)
    }

    const onSetRed = () => {
        setRedBg(i => i===null ? 'red' : null)
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Uplifting <span style={{color:bgColor, backgroundColor: redBg}}>{numbr}</span></h1>
                <Buttnon virvute={onSetColor} virvute2={onSetIncrease} onSetRed={onSetRed}></Buttnon>
                <Green bgc={bgColor}></Green>
            </header>

        </div>
    )
}

export default App;