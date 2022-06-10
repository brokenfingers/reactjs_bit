import './App.css';
import axios from 'axios'
import { useEffect, useReducer } from 'react';
import booksReducer from './Reducers/booksReducer'
function App() {


  const [fetchedBooks, dispatchBooks] = useReducer(booksReducer, null )

    useEffect(() => {
        if(fetchedBooks) return
        axios.get('https://in3.dev/knygos/')
      .then(function (response) {
          dispatchBooks({type: 'uzkrauta', payload: response.data})

        })
      }
     , [fetchedBooks]);

    return (
      <div className='App'>
          <header className='App-header'>
            <h1>Books</h1>
            <div className='card'>
              <button onClick={()=>dispatchBooks({type: 'sort_abc'})}>Rusiuoti pagal abc</button>
              <button onClick={()=>dispatchBooks({type: 'sort_default'})}>Default sort</button>
              <button onClick={()=>dispatchBooks({type: 'price_above_13'})}>Filter price above 13</button>
              <button onClick={()=>dispatchBooks({type: 'show_all'})}>Show all</button>
              <button onClick={()=>dispatchBooks({type: 'get_new'})}>Get new list from server</button>
              {
                fetchedBooks ? fetchedBooks.map((itm) => itm.show && <div key={itm.id}>{itm.title}<span>{itm.price}</span></div>) : <h2>Loading...</h2>
              }
            </div>
          </header>
      </div>
    );
}

export default App;
