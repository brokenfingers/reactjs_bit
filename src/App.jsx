import './App.css'
import CarList from './Components/003/CarList';


function App() {
    let cars = ['vovo', 'audi', 'bmw', 'dviratis'];

    return (
        <div className="App">
            <header className="App-header">
                <h1>Lists</h1>
                <CarList cars={cars}></CarList>
            </header>
        </div>
    )
}

export default App;