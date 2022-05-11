function Rainbow(props) {
    return (
            <div>
                {
                    props.colors.map((itm, i) => <div className="rainbow-line" style={{backgroundColor:itm}} key={i}></div>)

                }
            </div>
        
    )
}

export default Rainbow;