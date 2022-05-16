import './App.css'
import Antras from './Components/006/Antras';
import KvadratasParent from './Components/006/KvadratasParent';
import Raide from './Components/006/Raide';
import Vienas from './Components/006/Vienas';


function App() {

    const labas = [

    'L',

    'a',

    'b',

    'a',

    's',

    ',',

    ' ',

    'v',

    'a',

    'i',

    'k',

    'a',

    'i',

    '!'

];

    return (
        <div className="App">
            <header className="App-header">
                <Vienas skaicius={5} spalva='red' klase='small'></Vienas>
                <Antras skaicius={2} spalva='green' klase='big'></Antras>

                <KvadratasParent sqOrCirc='apskr' bigColor='skyblue' smallColor='pink'></KvadratasParent>
                <Raide array={labas}></Raide>
            </header>

        </div>
    )
}

export default App;