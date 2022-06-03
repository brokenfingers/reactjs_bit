import { useState } from "react";

function AddAnimal({setAnimalData}) {

    const [animalName, setAnimalName] = useState('')
    const [animalHasOwner, setAnimalHasOwner] = useState(0)
    const [animalType, setAnimalType] = useState(0)
    const [animalAge, setAnimalAge] = useState(0)
  

    const handleAddAnimal = () => {
        setAnimalData({name: animalName, has_owner: animalHasOwner, type: animalType, age: animalAge})
        setAnimalName('')
        setAnimalHasOwner('')
        setAnimalAge(0)
        setAnimalType('0')
    }
    
    return (
        <div>
            <h2>Add a animal</h2>
            <label>Name</label>
            <input value={animalName} onChange={(e) => setAnimalName(e.target.value)} type="text" />
            <label>HasOwner</label>
            <input value={animalHasOwner} onChange={(e)=>setAnimalHasOwner(e.target.value)} type="text" />
            <label>Age</label>
            <input value={animalAge} onChange={(e)=>setAnimalAge(e.target.value)} type="text" />
            <label>Select type</label>
            <select value={animalType} onChange={(e)=>setAnimalType(e.target.value)}>
                <option value='0'></option>
                <option value='1'>dog</option>
                <option value='2'>cat</option>
                <option value='3'>rat</option>
                <option value='4'>racoon</option>
            </select>
            <button onClick={handleAddAnimal}>Add</button>
        </div>
    )
}

export default AddAnimal;