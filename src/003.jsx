import './App.css'
import Rainbow from './Components/003/RaInbow';

const rainbow = [

    {color: 'crimson', size: 30, pos: 'top'},

    {color: 'orange', size: 14, pos: 'top'},

    {color: 'yellow', size: 52, pos: 'bottom'},

    {color: 'green', size: 27, pos: 'bottom'},

    {color: 'skyblue', size: 40, pos: 'top'},

    {color: 'darkblue', size: 17, pos: 'bottom'},

    {color: 'darkmagenta', size: 22, pos: 'top'}

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