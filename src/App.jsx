import './App.css'
import {useState} from 'react'


function App() {

    const [nameState, setNameState] = useState('')
    const [nameColor, setColorState] = useState(null)
    const [list, setList] = useState([])

    const handleTextChange = (e) => {
        setNameState(e.target.value)
    }

    const handleColorChange = e => {
        setColorState(e.target.value)
    }

    const handleClick = () => {
        if(!nameState|| !nameColor ) return

        setList(i => [...i, {nameState, nameColor }])

    }

    return (
        <div className="App">
            <header className="App-header">
                <div className='card'>
                    <p className='title'>Add to list</p>
                    <input onChange={handleTextChange} type="text" placeholder='name'value={nameState}/>
                    <input onChange={handleColorChange} type="color" value={nameColor}/>
                    <button onClick={handleClick}>add</button>
                </div>
                <div className='card'>
                    <p className='title'>List</p>
                    
                        <>
{

                        list.length > 0 ? list.map((itm, i)=><div style={{backgroundColor:itm.nameColor}} key={i}>{itm.nameState}</div> ): null
}

                        </>
                        
                    
                </div>
            </header> 
        </div>
    )
}

export default App;