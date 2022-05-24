import './App.css'
import { useEffect, useState } from 'react';


function App() {

    const [number, setNumber] = useState(null)
    const [squareArr, setSquareArr] = useState([])
    const [text, setText] = useState('');

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleButton = () => {
            setNumber(i => {
                localStorage.setItem('number', i+1)
                return i+1
            })
    }

    useEffect(()=>{
        setNumber(i => +localStorage.getItem('number') ?? 1)
    }, [])

    const handleAddSquare = () => {
        setSquareArr(i => {
             localStorage.setItem('square', JSON.stringify([...squareArr, text ?? 1]))
            return [...i, text ?? 1]
        }
            )
            setText('');
        
    }

    const handleRemoveSquare = () => {
        setSquareArr(i => {
            localStorage.setItem('square', JSON.stringify([...squareArr.slice(1)]))
            return [...squareArr.slice(0, squareArr.length-1)]
        }
            )
    }

    useEffect(()=>{
        setSquareArr(JSON.parse(localStorage.getItem('square') ?? '[]')  )
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <div className="card">
                    <p className="title">add one</p>
                    
                    <button onClick={handleButton}>add</button>
                </div>
                <div className='card'>
                    <p>{number}</p>
                </div>

                <div className="card">
                    <p className="title">squares</p>
                    <button onClick={handleAddSquare}>Add square</button>
                    <button onClick={handleRemoveSquare}>Remove square</button>
                    <input onChange={handleText} type='text' value={text}></input>
                </div>
                <div className='card'>
                    {
                        squareArr.map((itm, i) => <div className='square' key={i}>{itm !== 1 ? itm : null}</div>)
                    }
                </div>
            
            </header>
        </div>
    )
}

export default App;