

function ListItem({itm, listNr, setClickedId, setEditItem}) {

    const setId = () =>
    {
        setClickedId(itm.id)
    }

    const handleEditObj = () => {
        setEditItem(itm)
    }

    return(
        <div  style={{backgroundColor:itm.nameColor}}>{listNr} {itm.nameState}
            <button onClick={setId}>Trinti</button>
            <button onClick={handleEditObj}>Redaguoti</button>
        </div>
    )
}

export default ListItem;