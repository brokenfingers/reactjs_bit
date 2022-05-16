import './App.css'
import Antras from './Components/006/Antras';
import KvadratasParent from './Components/006/KvadratasParent';
import Vienas from './Components/006/Vienas';


function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Vienas skaicius={5} spalva='red' klase='small'></Vienas>
                <Antras skaicius={2} spalva='green' klase='big'></Antras>

                <KvadratasParent></KvadratasParent>
            </header>

        </div>
    )
}

export default App;