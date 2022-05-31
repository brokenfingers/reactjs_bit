function ListItem({ itm, listNr, setClickedId, setEditItem }) {
    const setId = () => {
        setClickedId(itm.id);
    };

    const handleEditObj = () => {
        setEditItem(itm);
    };

    return (
        <div style={{ backgroundColor: itm.nameColor }}>
            {listNr}{' '}
            <span style={{ color: itm.checked ? 'red' : 'black' }}>
                {itm.nameState} {itm.range}
            </span>{' '}
            {itm.selected}
            <button onClick={setId}>Trinti</button>
            <button onClick={handleEditObj}>Redaguoti</button>
        </div>
    );
}

export default ListItem;
