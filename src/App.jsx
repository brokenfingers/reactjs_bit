import './App.css'
import Buttnon from './Components/008/Buttnon';
import Green from './Components/008/Green';
import { useState} from 'react'

function App() {

    const [bgColor, setColor] = useState(null)
    
    const onSetColor = () => {
        setColor('green');
    }

    return (
        <div className="App">
            <header className="App-header">
                <Buttnon virvute={onSetColor}></Buttnon>
                <Green bgc={bgColor}></Green>
            </header>

        </div>
    )
}

export default App;