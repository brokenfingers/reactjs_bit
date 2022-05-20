import './App.css'
import './bootstrap.css'
import {useState} from 'react'

function App() {

const [text, setText] = useState('');

const [anArray, setArray] = useState([]);







const handleText = (e) => {
    setArray(it=> [...it, e.target.value])
    setText(e.target.value)
}

    return (
        <div className="App">
            <header className="App-header">
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="textOk">Text</label>
                            <input type="text" className="form-control" id="textOk" aria-describedby="emailHelp" value={text} onChange={handleText}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </form>

                    <ul>
                        {
                            anArray.map((ir, i )=> <li key={i}>{ir}</li>)
                        }
                    </ul>
                </div>
                </div>

            </header>
        </div>
    )
}

export default App;