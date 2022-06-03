function Animals({ animal, index }) {
    return (
        <div>
            <b>{index}</b>
            <span>{animal.name}</span>
            <i>{['dog', 'cat', 'rat', 'racoon'][animal.type-1]}</i>
            <small>{['has owner', 'hasnt owner'][animal.has_owner]}</small>
            <button>edit</button>
            <button>delete</button>
        </div>
    );
}

export default Animals;
