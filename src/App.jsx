import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Tree from './Components/018/Trees';
import Animals from './Components/018/Animals';
import AddTree from './Components/018/AddTree';

function App() {
    const [treeList, setTreeList] = useState(null);
    const [animalList, setAnimalList] = useState(null);
    //READ

    useEffect(() => {
        axios.get('http://localhost:3003/trees').then((res) => {
            setTreeList(res.data);
        });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3003/animals').then((res) => {
            setAnimalList(res.data);
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div className="card">
                    <p className="title">create</p>
                    <AddTree></AddTree>
                </div>
                <div className="card">
                    <p className="title">trees</p>
                    {treeList
                        ? treeList.map((itm, i) => (
                              <Tree key={i} tree={itm} index={i + 1}></Tree>
                          ))
                        : null}
                </div>
                <div className="card">
                    <p className="title">animals</p>
                    {animalList
                        ? animalList.map((itm, i) => (
                              <Animals
                                  key={itm.id}
                                  animal={itm}
                                  index={i + 1}
                              ></Animals>
                          ))
                        : null}
                </div>
            </header>
        </div>
    );
}

export default App;
