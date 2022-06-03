import { useState } from "react";

function EditTree({setEditTree, editTree, setEditedTree}) {

    const [treeTitle, setTreeTitle] = useState(editTree.title)
    const [treeHeight, setTreeHeight] = useState(editTree.height)
    const [treeType, setTreeType] = useState(editTree.type)
   

    const handleAddTree = () => {
        setEditedTree({id: editTree.id, title: treeTitle, height: treeHeight, type: treeType})
        setTreeTitle('')
        setTreeHeight('')
        setTreeType('0')
        setEditTree(null)
    }
    return (
        <div className='modal'>
            <h2>Edit a tree</h2>
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
            <button onClick={handleAddTree}>Edit</button>
        </div>
    )
}

export default EditTree;