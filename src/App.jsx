import './App.css'
import axios from 'axios'

import { useEffect, useState} from 'react'
import Square from './Components/009/Square'


function App() {

    const [btnArr, setArray] = useState([])

    const setSquare = () => {
        setArray(i => [...(i) || 1, 1])
    }

    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp=> {
            setUsers(resp.data);
            console.log(resp.data)
        })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <h1>use effect</h1>
                <button onClick={setSquare }>add</button>
            <div className='square-wrapper'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((itm, i)=> <tr key={i}><td>{itm.name}</td><td>{itm.address.street+itm.address.suite}</td></tr>)
                    }
                </tbody>
                
                
                
            </table>
            

            </div>

            </header>
            
        </div>
    )
}

export default App;