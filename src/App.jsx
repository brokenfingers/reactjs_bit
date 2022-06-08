import './App.css';
import axios from 'axios'
import { useEffect, useReducer } from 'react';
import booksReducer from './Reducers/booksReducer'
function App() {


  const [fetchedBooks, dispatchBooks] = useReducer(booksReducer, null )

    useEffect(() => {
        if(!fetchedBooks) {
        axios.get('https://in3.dev/knygos/')
      .then(function (response) {
          dispatchBooks({type: 'uzkrauta', payload: response.data})

        })
      }}
     , [fetchedBooks]);

    return (
      <div className='App'>
          <header className='App-header'>
            <h1>Books</h1>
            <div className='card'>
              <button onClick={()=>dispatchBooks({type: 'sort_abc'})}>Rusiuoti pagal abc</button>
              {
                fetchedBooks ? fetchedBooks.map((itm) => <div key={itm.id}>{itm.title}</div>) : <h2>Loading...</h2>
              }
            </div>
          </header>
      </div>
    );
}

export default App;
