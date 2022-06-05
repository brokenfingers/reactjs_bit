import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Tree from './Components/018/Trees';
import Animals from './Components/018/Animals';
import AddTree from './Components/018/AddTree';
import AddAnimal from './Components/018/AddAnimal';
import EditTree from './Components/018/EditTree';
import EditAnimal from './Components/018/EditAnimals';

function App() {

    const [editedAnimal, setEditedAnimal] = useState(null)
    const [editAnimal, setEditAnimal] = useState(null)
    const [editedTree, setEditedTree] = useState(null)
    const [editTree, setEditTree] = useState(null)
    const [deleteAnimalData, setDeleteAnimalData] = useState(null)
    const [deleteTreeData, setDeleteTreeData] = useState(null)
    const [animalUpdateTime, setAnimalUpdateTime] = useState(Date.now())
   const [treeUpdateTime, setTreeUpdateTime] = useState(Date.now())
    const [treeList, setTreeList] = useState(null);
    const [animalList, setAnimalList] = useState(null);
    const [treeData, setTreeData] = useState(null);
    const [animalData, setAnimalData] = useState(null);

    

    //READ

    useEffect(() => {
        axios.get('http://localhost:3003/trees').then((res) => {
            setTreeList(res.data);
        });
    }, [treeUpdateTime]);

    useEffect(() => {
        axios.get('http://localhost:3003/animals').then((res) => {
            setAnimalList(res.data);
        });
    }, [animalUpdateTime]);
    
    // WRITE

    useEffect(()=>{
        if(treeData === null) return

        axios.post('http://localhost:3003/trees', treeData)
        .then(response => setTreeUpdateTime(Date.now()))
        setTreeData(null)
    }, [treeData])
    
    useEffect(()=>{
        if(animalData === null) return

        axios.post('http://localhost:3003/animals', animalData)
        .then(res => { setAnimalUpdateTime(Date.now()) })
        setAnimalData(null)
    }, [animalData])

        // DELETE

    useEffect(()=>{
        if(deleteTreeData === null) return

        axios.delete('http://localhost:3003/trees/'+deleteTreeData.id)
        .then(response => setTreeUpdateTime(Date.now()))
        setDeleteTreeData(null)
    }, [deleteTreeData])
    
    useEffect(()=>{
        if(deleteAnimalData === null) return

        axios.delete('http://localhost:3003/animals/'+deleteAnimalData.id)
        .then(response => setAnimalUpdateTime(Date.now()))
        setDeleteAnimalData(null)
    }, [deleteAnimalData])


    //PUT
        useEffect(()=>{
        if(editedTree === null) return

        axios.put('http://localhost:3003/trees/'+editedTree.id, editedTree)
        .then(response => setTreeUpdateTime(Date.now()))
        setEditedTree(null)
    }, [editedTree])
    
        useEffect(()=>{
        if(editedAnimal === null) return
            console.log(editAnimal)
        axios.put('http://localhost:3003/animals/'+editedAnimal.id, editedAnimal)
        .then(response => setAnimalUpdateTime(Date.now()))
        setEditedAnimal(null)
    }, [editedAnimal])

    return (
        <div className="App">
            <header className="App-header">
                <div className="card">
                    <p className="title">create</p>
                    <AddTree setTreeData={setTreeData}></AddTree>
                    <AddAnimal setAnimalData={setAnimalData}></AddAnimal>
                </div>
                <div className="card">
                    <p className="title">trees</p>
                    {treeList
                        ? treeList.map((itm, i) => (
                              <Tree setEditTree={setEditTree} setDeleteTreeData={setDeleteTreeData} key={i} tree={itm} index={i + 1}></Tree>
                          ))
                        : null}
                        {
                            editTree && <EditTree setEditTree={setEditTree} setEditedTree={setEditedTree} editTree={editTree}></EditTree>
                        }
                </div>
                <div className="card">
                    <p className="title">animals</p>
                    {animalList && animalList.map((itm, i) => (
                              <Animals
                              setEditAnimal = {setEditAnimal}
                                setDeleteAnimalData={setDeleteAnimalData}
                                  key={itm.id}
                                  animal={itm}
                                  index={i + 1}
                              ></Animals>
                          ))
                    }
                    {
                        editAnimal && <EditAnimal setEditAnimal={setEditAnimal} setEditedAnimal={setEditedAnimal} editAnimal={editAnimal}></EditAnimal>
                    }
                </div>
            </header>
        </div>
    );
}

export default App;
