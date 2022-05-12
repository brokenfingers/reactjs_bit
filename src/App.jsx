import './App.css'
import FatCat from './Components/004/FatCat';
import FatDog from './Components/004/FatDog';

function App() {
    

    return (
        <div className="App">
            <header className="App-header">
                <FatCat color="brown"></FatCat>
                <FatDog color="orange"></FatDog>
            </header>
        </div>
    )
}

export default App;