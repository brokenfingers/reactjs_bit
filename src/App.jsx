import './App.css'
import Car from './Components/002/Car';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Props</h1>
                <Car pr='3500' maker="Opel" color='blue' size='15' font='Courier' clr="yellow" markSize="40"></Car>
                <Car pr='9000' maker="Volvo" color='yellow' size='22' font='Arial' clr="red" markSize="60"></Car>
                <Car pr='3000' maker="MB" color='silver' size='24' font='Geneva' clr="green" markSize="20"></Car>
            </header>
        </div>
    )
}

export default App;