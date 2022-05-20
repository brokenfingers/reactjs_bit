import './App.css'
import './bootstrap.css'
import { useState} from 'react'

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

const [color, setColor] = useState('#ffffff')

const onColorChange = (e) => {

    setColor(e.target.value )
}

const addColor = () => {
    setClrArr(i => color !== '' ? [...i || '#ffffff', color] : i)
}

const clearColor = () => {
    setClrArr([])
}


const [select, setSelect] = useState('')
const [selectArr, setSelectArr] = useState([])

const onChangeSelect = e => {
    setSelect(e.target.value);
}

const addSelect = () => {
    setSelectArr(i => select !== '' ? [...i, select] : i)
}

const clearSelect = () => {
    setSelectArr([])
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
                       
                        <button className='btn btn-primary' onClick={onButton}>add</button>
                        <button className='btn btn-primary' onClick={onClearList}>clear</button>
                    </div>

                    <ul className="list-group">
                        {
                            anArray.map((ir, i )=> <li className="list-group-item" key={i}>{ir}</li>)
                        }
                    </ul>



                    <div className="form-group">
                        <input type="color" className="form-control"  aria-describedby="emailHelp" value={color} onChange={onColorChange}/>
                        <button className='btn btn-primary' onClick={addColor}>add</button>
                        <button className='btn btn-primary' onClick={clearColor}>clear</button>
                    </div>
                    

                    
                    <ul className="list-group">
                        {
                            clrArr.map((ir, i )=> <li style={{backgroundColor:ir}}className="list-group-item" key={i}>{ir}</li>)
                        }
                    </ul>

                    <div className="form-group">
                        <label htmlFor="number">Choose a car:</label>

                            <select name="number" id="number" value={select} onChange={onChangeSelect}>
                            <option value="" >select</option>
                            <option value="1" >1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            </select>
                        <button className='btn btn-primary' onClick={addSelect}>add</button>
                        <button className='btn btn-primary' onClick={clearSelect}>clear</button>

                        <ul className="list-group">
                        {
                            selectArr.map((ir, i )=> <li className="list-group-item" key={i}>{ir}</li>)
                        }
                    </ul>

                    </div>



                </div>
                </div>

            </header>
        </div>
    )
}

export default App;