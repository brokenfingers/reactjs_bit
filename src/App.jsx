import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {

  const [fetched, setFetched] = useState(null)
    useEffect(() => {
        if(!fetched) {
        axios.get('https://in3.dev/knygos/')
      .then(function (response) {
          setFetched(response.data);
        })
      }}
     , [fetched]);

    return (
      <div className='App'>
          <header className='App-header'>
            <h1>Books</h1>
            <div className='card'>
              {
                fetched && fetched.map((itm) => <div key={itm.id}>{itm.title}</div>)
              }
            </div>
          </header>
      </div>
    );
}

export default App;
