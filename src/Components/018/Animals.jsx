function Animals({ animal, index, setDeleteAnimalData }) {
    return (
        <div>
            <b>{index}</b>
            <span>{animal.name}</span>
            <i>{['dog', 'cat', 'rat', 'racoon'][animal.type-1]}</i>
            <small>{['has owner', 'hasnt owner'][animal.has_owner]}</small>
            <button>edit</button>
            <button onClick={()=>setDeleteAnimalData(animal)}>delete</button>
        </div>
    );
}

export default Animals;
