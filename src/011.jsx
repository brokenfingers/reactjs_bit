import './App.css'
import { useEffect, useState } from 'react';


function App() {

    const [number, setNumber] = useState(null)
    const [squareArr, setSquareArr] = useState([])
    const [text, setText] = useState('#fff');
    const [check, setCheck] = useState(true)
    const [check2, setCheck2] = useState(false)


    const handleCheck = (e) => {
        setCheck(i => !i)
    }

    const handleCheck2 = () => {
        setCheck2(i => !i)
    }

    const resetCheck = () => {
        setCheck(false)
        setCheck2(false)

    }

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
                    <input onChange={handleText} type='color' value={text}></input>
                </div>
                <div className='card'>
                    {
                        squareArr.map((itm, i) => <div className='square' style={{backgroundColor: itm !== 1 ? itm : null}} key={i}></div>)
                    }
                </div>

                <div className="card">
                    <p className="title">Square toggle</p>
                    <label>Red / green</label>
                    <input type="checkbox" name='ga' value={check} onChange={handleCheck} checked={check === true}/>
                    <label>Square / circle</label>
                    <input type="checkbox" name='ga' value={check} onChange={handleCheck2} checked={check2}/>
                    <button onClick={resetCheck}>reset</button>
                </div>
                <div className="card">
                    <div onClick={resetCheck} className='square' style={{backgroundColor:check ? '#FF0000' : '#00ff00', borderRadius: check2 ? '50%' : '0'}}></div>
                </div>
            
            </header>
        </div>
    )
}

export default App;