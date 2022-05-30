

function ListItem({itm, listNr, setClickedId}) {

    const setId = () =>
    {
        setClickedId(itm.id)
    }

    return(
        <div  style={{backgroundColor:itm.nameColor}}>{listNr} {itm.nameState}
            <button onClick={setId}>Trinti</button>
        </div>
    )
}

export default ListItem;