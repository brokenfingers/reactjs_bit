import './App.css'
import Buttnon from './Components/008/Buttnon';
import Green from './Components/008/Green';
import { useState} from 'react'

function App() {

    const [bgColor, setColor] = useState('pink')
    
    const onSetColor = () => {
        setColor(i => i === 'pink' ? 'green' : 'pink');
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