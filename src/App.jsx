import './App.css'
import { useState } from 'react';

function App() {

    const [checkbox, setCheckbox] = useState({a:true, b:false, c: false, d: true});
    const [radio, setRadio] = useState('option3')
    const [list, setList] = useState([])
    const [radioList, setRadioList] = useState([])
    const [range, setRange] = useState(0);
    const [rangeList, setRangeList] = useState([])

    
    const  handleCheckbox = (checked) => {setCheckbox(i => ({...i, [checked]: !i[checked]}))}
    const handleList = () => {setList(i => [...i, (checkbox.a ? 'A' : '')+(checkbox.b ? 'B' : '')+(checkbox.c ? 'C' : '')+(checkbox.d ? 'D' : '')])}
    const handleClear = () => {setList(i => [])}

    const handleRadio = (e) => { setRadio(e.target.value) }
    const handleRadioList = () => { setRadioList(i=>[...i, radio])}
    const handleRadioClear = () => { setRadioList( i => []) }
    
    const handleRange = (e) => { setRange(e.target.value)}
    const handleRangeList = () => { setRangeList(i=>[...i, range])}
    const handleRangeClear = () => { setRangeList( i => []) }
    
    return (
        <div className="App">
            <header className="App-header">
                <div className="card">
                    <p className="title">Checkbox</p>
                    <label for="vehicle1"> Check A</label>
                   <input type="checkbox" name="vehicle1" onChange={()=>handleCheckbox('a')} value={checkbox.a} checked={checkbox.a}/>
                    <label for="vehicle1"> Check B</label>
                   <input type="checkbox" name="vehicle1" onChange={()=>handleCheckbox('b')} value={checkbox.b} checked={checkbox.b}/>
                    <label for="vehicle1"> Check C</label>
                   <input type="checkbox" name="vehicle1" onChange={()=>handleCheckbox('c')} value={checkbox.c} checked={checkbox.c}/>
                    <label for="vehicle1"> Check D</label>
                   <input type="checkbox" name="vehicle1" onChange={()=>handleCheckbox('d')} value={checkbox.d} checked={checkbox.d}/>
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
                <div className='card'>
                    <p className="title">Radio</p>
                     <input type="radio" name="fav" value="option1" onChange={handleRadio} checked={radio === 'option1'}/>
                    <label>option 1</label>
                     <input type="radio" name="fav" value="option2"  onChange={handleRadio} checked={radio === 'option2'}/>
                    <label>option 2</label>
                     <input type="radio" name="fav" value="option3"  onChange={handleRadio} checked={radio === 'option3'}/>
                    <label>option 3</label>
                     <input type="radio" name="fav" value="option4" onChange={handleRadio} checked={radio === 'option4'}/>
                    <label>option 4</label>
                    <button onClick={handleRadioList}>radio to list</button>
                </div>
                <div className="card">
                    <ul>
                    {
                        radioList.map((itm, i) => <li key={i}>{itm}</li>)
                     }  
                    </ul>
                    <button onClick={handleRadioClear}>Clear list</button>
                </div>

                <div className="card">
                     <p className="title">Range</p>
                    <label for="points">Points (between 0 and 10):</label>
                    <input type="range" id="points" name="points" min="0" max="100" value={range} onChange={handleRange}/>
                    <button onClick={handleRangeList}>ADD Range</button>
                </div>
                <div className="card">
                    <ul>
                    {
                        rangeList.map((itm, i) => <li key={i}>{itm}</li>)
                     }  
                    </ul>
                    <div>Suma:
                        {
                            rangeList.length>0 ? rangeList.reduce((a, b) => +a + +b) : 0

                        }
                    </div>
                    <button onClick={handleRangeClear}>Clear list</button>
                </div>
            
            </header>
        </div>
    )
}

export default App;