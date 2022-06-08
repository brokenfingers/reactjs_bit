import './App.css';
import axios from 'axios'
import { useEffect, useReducer } from 'react';
import booksReducer from './Reducers/booksReducer'
function App() {

  // const [fetched, setFetched] = useState(null)
  const [fetchedBooks, dispatchBooks] = useReducer(booksReducer, null )

    useEffect(() => {
        if(!fetchedBooks) {
        axios.get('https://in3.dev/knygos/')
      .then(function (response) {
          dispatchBooks({type: 'uzkrauta', payload: response.data})

          // setFetched(response.data);
        })
      }}
     , [fetchedBooks]);

    return (
      <div className='App'>
          <header className='App-header'>
            <h1>Books</h1>
            <div className='card'>
              {
                fetchedBooks && fetchedBooks.map((itm) => <div key={itm.id}>{itm.title}</div>)
              }
            </div>
          </header>
      </div>
    );
}

export default App;
