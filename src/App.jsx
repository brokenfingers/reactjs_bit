import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Tree from './Components/018/Trees';

function App() {
    const [treeList, setTreeList] = useState(null);

    //READ

    useEffect(() => {
        axios.get('http://localhost:3003/trees').then((res) => {
            setTreeList(res.data);
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div className="card">
                    <p className="title">create</p>
                </div>
                <div className="card">
                    <p className="title">trees</p>
                    {treeList
                        ? treeList.map((itm, i) => (
                              <Tree key={i} tree={itm}></Tree>
                          ))
                        : null}
                </div>
                <div className="card">
                    <p className="title">animals</p>
                </div>
            </header>
        </div>
    );
}

export default App;
