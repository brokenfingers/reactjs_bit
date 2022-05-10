import './App.css'
import Car from './Components/002/Car';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Props</h1>
                <Car maker="Opel" color='blue' size='15' font='Courier'></Car>
                <Car maker="Volvo" color='yellow' size='22' font='Arial'></Car>
                <Car maker="MB" color='silver' size='24' font='Geneva'></Car>
                {/* font-family: 'Courier New', Courier, monospace;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */}
            </header>
        </div>
    )
}

export default App;