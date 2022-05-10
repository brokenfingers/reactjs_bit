import './App.css'
import Car from './Components/002/Car';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Props</h1>
                <Car maker="Opel" color='blue' size='15' font='Courier' clr="yellow"></Car>
                <Car maker="Volvo" color='yellow' size='22' font='Arial' clr="red"></Car>
                <Car maker="MB" color='silver' size='24' font='Geneva' clr="green"></Car>
            </header>
        </div>
    )
}

export default App;