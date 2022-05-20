import './App.css'
import './bootstrap.css'
import {useEffect, useState} from 'react'

function App() {

const [text, setText] = useState('');

const [anArray, setArray] = useState([]);




const onButton = (e) => {

    setArray(it=> text !=='' ? [...it ?? '', text] : it)
    setText('');
}

const onClearList = () => {
    setArray([])
}


const handleText = (e) => {
    setText(e.target.value)
}


const [clrArr, setClrArr] = useState([]);

const [color, setColor] = useState('')

const onColorChange = (e) => {

    setColor(e.target.value )
}

const addColor = () => {
    setClrArr(i => color !== '' ? [...i || '#ffffff', color] : i)
}

const clearColor = () => {
    setClrArr([])
}

    return (
        <div className="App">
            <header className="App-header">
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    
                    <div className="form-group">
                        <label htmlFor="textOk">Text</label>
                        <input type="text" className="form-control" id="textOk" aria-describedby="emailHelp" value={text} onChange={handleText}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        <button className='btn btn-primary' onClick={onButton}>add</button>
                        <button className='btn btn-primary' onClick={onClearList}>clear</button>
                    </div>

                    <div className="form-group">
                        <input type="color" className="form-control"  aria-describedby="emailHelp" value={color} onChange={onColorChange}/>
                        <button className='btn btn-primary' onClick={addColor}>add</button>
                        <button className='btn btn-primary' onClick={clearColor}>clear</button>
                    </div>
                    

                    <ul className="list-group">
                        {
                            anArray.map((ir, i )=> <li className="list-group-item" key={i}>{ir}</li>)
                        }
                    </ul>
                    <ul className="list-group">
                        {
                            clrArr.map((ir, i )=> <li style={{backgroundColor:ir}}className="list-group-item" key={i}>{ir}</li>)
                        }
                    </ul>
                </div>
                </div>

            </header>
        </div>
    )
}

export default App;