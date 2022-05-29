function CarNames ({cars}) {

    return (
        <>
            <div className="card">
            <p className='title'>Cars</p>
            {
                
                cars.map(itm => <div key={itm.id}>{itm.type}</div>)
            }
        </div>
        <div className="card">
            <p className='title price'>Cars</p>
            {
                
                cars.map(itm => <div key={itm.id}>{itm.type}<span>{itm.price+"$"}</span></div>)
            }
        </div>
        </>
    
    )
}

export default CarNames;