import { useState } from "react";

function AddTree() {

    const [treeTitle, setTreeTitle] = useState('')
    const [treeHeight, setTreeHeight] = useState('')
    const [treeType, setTreeType] = useState(0)
    const [treeObj, setTreeObj] = useState(null)

    const handleAddTree = () => {
        setTreeObj(i => ({title: treeTitle, height: treeHeight, type: treeType}))
        setTreeTitle('')
        setTreeHeight('')
        setTreeType('0')
    }
    

    return (
        <div>
            <h2>Add a tree</h2>
            <label>Title</label>
            <input value={treeTitle} onChange={(e) => setTreeTitle(e.target.value)} type="text" />
            <label>Height</label>
            <input value={treeHeight} onChange={(e)=>setTreeHeight(e.target.value)} type="text" />
            <label>Select type</label>
            <select value={treeType} onChange={(e)=>setTreeType(e.target.value)}>
                <option value='0'></option>
                <option value='1'>spygliuotis</option>
                <option value='2'>lapuotis</option>
                <option value='3'>krumas</option>
                <option value='4'>gele</option>
            </select>
            <button onClick={handleAddTree}>Add</button>
        </div>
    )
}

export default AddTree;