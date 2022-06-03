import { useState } from "react";

function EditAnimal({setEditAnimal, editAnimal, setEditedAnimal}) {

    const [animalTitle, setAnimalTitle] = useState(editAnimal.name)
    const [animalHeight, setAnimalHeight] = useState(editAnimal.has_owner)
    const [animalType, setAnimalType] = useState(editAnimal.type)
   

    const handleEditAnimal = () => {
        console.log(editAnimal)
        setEditedAnimal({id: editAnimal.id, name: animalTitle, height: animalHeight, type: animalType})
        setAnimalTitle('')
        setAnimalHeight('')
        setAnimalType('0')
        setEditAnimal(null)
    }
    return (
        <div className='modal'>
            <h2>Edit a animal</h2>
            <label>Name</label>
            <input value={animalTitle} onChange={(e) => setAnimalTitle(e.target.value)} type="text" />
            <label>Height</label>
            <input value={animalHeight} onChange={(e)=>setAnimalHeight(e.target.value)} type="text" />
            <label>Select type</label>
            <select value={animalType} onChange={(e)=>setAnimalType(e.target.value)}>
                <option value='0'></option>
                <option value='1'>dog</option>
                <option value='2'>cat</option>
                <option value='3'>rat</option>
                <option value='4'>racoon</option>
            </select>
            <button onClick={handleEditAnimal}>Edit</button>
        </div>
    )
}

export default EditAnimal;