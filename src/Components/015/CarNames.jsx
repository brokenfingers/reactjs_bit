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
        <div className="card">
            <p className='title price of MB'>Cars</p>
            {
                
                cars.filter(itm => itm.type==='MB').map(itm => <div key={itm.id}>{itm.type}<span>{itm.price+"$"}</span></div>)
            }
        </div>
        <div className="card">
            <p className='title'>Akcija</p>
            {
                
                cars.map(itm => <div key={itm.id}>{itm.type}<span>{itm.price+(itm.price < 10000 ? " $ AKCIJA!" : "$")}</span></div>)
            }
        </div>
        <div className="card">
            <p className='title'>Tipo spalva</p>
            {
                
                cars.map(itm => <div style={{color: itm.color}} key={itm.id}>{itm.type}<span>{itm.price+(itm.price < 10000 ? " $ AKCIJA!" : "$")}</span></div>)
            }
        </div>
        </>
    
    )
}

export default CarNames;