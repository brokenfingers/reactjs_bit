import './App.css'
import Rainbow from './Components/003/RaInbow';

const rainbow = [

    {color: 'crimson', size: 30},

    {color: 'orange', size: 14},

    {color: 'yellow', size: 52},

    {color: 'green', size: 27},

    {color: 'skyblue', size: 40},

    {color: 'darkblue', size: 17},

    {color: 'darkmagenta', size: 22}

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