

function ListItem({itm, listNr}) {

    return(
        <div style={{backgroundColor:itm.nameColor}}>{listNr} {itm.nameState}</div>
    )
}

export default ListItem;