function Buttnon({virvute, virvute2, onSetRed, onSetSqArray, onRemSqArray}) {

    return (
        <>
            <button onClick={virvute}>Change color</button>
            <button onClick={virvute2}>increase number</button>
            <button onClick={onSetRed}>setRed</button>
            <button onClick={onSetSqArray}>add square</button>
            <button onClick={onRemSqArray}>remove square</button>
        </>
    )
}

export default Buttnon;