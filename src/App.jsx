import './App.css'
import Rainbow from './Components/003/RaInbow';

const rainbow = [

    'crimson',

    'orange',

    'yellow',

    'green',

    'skyblue',

    'darkblue',

    'darkmagenta'

];


function App() {
    

    return (
        <div className="App">
            <header className="App-header">
                <Rainbow colors={rainbow}></Rainbow>
            </header>
        </div>
    )
}

export default App;