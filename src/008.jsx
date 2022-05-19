import './App.css'
import Buttnon from './Components/008/Buttnon';
import Green from './Components/008/Green';
import { useState} from 'react'
import Square from './Components/008/Square';

function App() {

    const [bgColor, setColor] = useState('pink')
    const [numbr, setIncrease] = useState(1)
    const [redBg, setRedBg] = useState(null)

    const [sqArr, setSqArray] = useState([])

    const onSetSqArray = () => {
            setSqArray( itm => [...sqArr, ++(sqArr[sqArr.length-1]) || 1])
    }

    const onRemSqArray = () => {

        setSqArray(itm => itm.slice(0, -1))
    }

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
                <Buttnon virvute={onSetColor} virvute2={onSetIncrease} onSetRed={onSetRed} onSetSqArray={onSetSqArray} onRemSqArray ={onRemSqArray}></Buttnon>
                <Green bgc={bgColor}></Green>

                <div>
                    {

                        sqArr.map((itm, i) => <Square key={i} i={i}></Square>)
                    }

                </div>
            </header>
            
        </div>
    )
}

export default App;