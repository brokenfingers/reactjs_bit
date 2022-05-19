import './App.css'
import axios from 'axios'

import { useEffect, useState} from 'react'
import Square from './Components/009/Square'
import Table from './Components/009/Table'
import Table2 from './Components/009/Table2'


function App() {

    const [btnArr, setArray] = useState([])

    const setSquare = () => {
        setArray(i => [...(i) || 1, 1])
    }

    const [users, setUsers] = useState([])

    const[users2, setUser2] = useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/users?limit=10')
        .then(resp =>{
            setUser2(resp.data.users)
            console.log(resp.data.users)
        })
    }, [])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp=> {
            setUsers(resp.data);
            
        })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <h1>use effect</h1>
                <button onClick={setSquare }>add</button>
            <div className='square-wrapper'>
            <Table users={users}></Table>
            <Table2 users={users2}></Table2>

            </div>

            </header>
            
        </div>
    )
}

export default App;