function Square({i}) {
    return(
        <>
            <div  className={i%2===0 ? 'square' : 'circle'}></div>
        </>
    )
}

export default Square;