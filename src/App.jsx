import './App.css'
// import CarNames from './Components/015/CarNames';
import CarNames2 from './Components/015/CarNames2';
import { useState } from 'react';

 
 const cars = [
        {id: 1, type: 'MB', color: 'blue', price: 45874.01},
        {id: 4, type: 'Volvo', color: 'pink', price: 54658.00},
        {id: 17, type: 'MB', color: 'black', price: 6465.77},
        {id: 47, type: 'Opel', color: 'blue', price: 89791.77},
        {id: 10, type: 'Scania', color: 'red', price: 44624.00},
        {id: 107, type: 'BMW', color: 'red', price: 98591.00},
        {id: 44, type: 'BMW', color: 'yellow', price: 789.30},
        {id: 78, type: 'MB', color: 'blue', price: 64598.00},
        {id: 99, type: 'Tesla', color: 'gray', price: 78944.00}
    ];



function App() {

     const [carItem, setCarItem] = useState(null)
     const [activeCar, setActiveCar] = useState(10)

    return (
        <div className="App">
            <header className="App-header">
                {/* <CarNames cars={cars}></CarNames> */}
                <h2>Picked model: {carItem ? carItem.type : null}</h2>
                <CarNames2 cars={cars} setCarItem={setCarItem} activeCar={activeCar} setActiveCar={setActiveCar}></CarNames2>
            </header> 
        </div>
    )
}

export default App;