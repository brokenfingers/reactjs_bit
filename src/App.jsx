import './App.css'
import { useState } from 'react';

function App() {

    const [checkbox, setCheckbox] = useState({a:true, b:false, c: false, d: true});
    
    const  handleCheckbox = (checked) => {
        setCheckbox(i => ({...i, [checked]: !i[checked]}))
    }

    const [list, setList] = useState([])

    const handleList = () => {
        setList(i => [...i, (checkbox.a ? 'A' : '')+(checkbox.b ? 'B' : '')+(checkbox.c ? 'C' : '')+(checkbox.d ? 'D' : '')])
    }

    const handleClear = () => {
        setList(i => [])
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="card">
                    <p className="title">Lentele 1</p>
                    <label for="vehicle1"> Check A</label>
                   <input type="checkbox" name="vehicle1" onChange={()=>handleCheckbox('a')} value={checkbox.a} checked={checkbox.a}></input>
                    <label for="vehicle1"> Check B</label>
                   <input type="checkbox" name="vehicle1" onChange={()=>handleCheckbox('b')} value={checkbox.b} checked={checkbox.b}></input>
                    <label for="vehicle1"> Check C</label>
                   <input type="checkbox" name="vehicle1" onChange={()=>handleCheckbox('c')} value={checkbox.c} checked={checkbox.c}></input>
                    <label for="vehicle1"> Check D</label>
                   <input type="checkbox" name="vehicle1" onChange={()=>handleCheckbox('d')} value={checkbox.d} checked={checkbox.d}></input>
                   <button onClick={handleList}> add to list</button>
                </div>
                <div className="card">
                    <ul>


                    {
                        list.map((itm, i) => <li key={i}>{itm}</li>)
                     }  
                    
                    </ul>
                    <button onClick={handleClear}>Clear list</button>
                </div>
            </header>
        </div>
    )
}

export default App;