function Rainbow(props) {
    return (
            <div>
                {
                    props.colors.sort((a, b) => b.size - a.size).map((itm, i) => <div className="rainbow-line" style={{backgroundColor:itm.color, height:itm.size}} key={i}></div>)

                }
            </div>
        
    )
}

export default Rainbow;