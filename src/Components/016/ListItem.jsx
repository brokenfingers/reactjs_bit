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
                {itm.nameState}
            </span>{' '}
            {itm.range}
            <h2>{itm.count}</h2>
            {itm.selected}
            <button onClick={setId}>Trinti</button>
            <button onClick={handleEditObj}>Redaguoti</button>
        </div>
    );
}

export default ListItem;
