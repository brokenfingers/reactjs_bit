function List() {
    const sizes = ['XS', 'S', 'XM', 'M', 'L', 'XL', 'XXL']
    return (
        <>
        {
            sizes.map((itm, i) => <div key={i}>{itm}</div>)
        }
        </>
    )
}

export default List;