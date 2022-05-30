import './App.css'
import {useState} from 'react'
import ListItem from './Components/016/ListItem'


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
        setNameState('')
        setColorState(null)
    }
    const sortNames = () => {
        setList(i => [...list.sort((a, b) => a.nameState.localeCompare(b.nameState) )])
    }
    const sortColors = () => {
        setList(i => [...list.sort((a, b) => a.nameColor.localeCompare(b.nameColor) )])
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className='card'>
                    <p className='title'>Add to list</p>
                    <input onChange={handleTextChange} type="text" placeholder='name'value={nameState}/>
                    <input onChange={handleColorChange} type="color" value={nameColor}/>
                    <button onClick={handleClick}>add</button>
                    <button onClick={sortNames}>sort names</button>
                    <button onClick={sortColors}>sort colors</button>

                </div>
                <div className='card'>
                    <p className='title'>List</p>
                    
                        <>
{

                        list.length > 0 ? list.map((itm, i)=><ListItem key={i} itm={itm} listNr={i+1}></ListItem> ): null
}

                        </>
                        
                    
                </div>
            </header> 
        </div>
    )
}

export default App;