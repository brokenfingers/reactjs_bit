import './App.css'
import Antras from './Components/006/Antras';
import Vienas from './Components/006/Vienas';


function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Vienas skaicius={5}></Vienas>
                <Antras skaicius={9}></Antras>
            </header>
        </div>
    )
}

export default App;