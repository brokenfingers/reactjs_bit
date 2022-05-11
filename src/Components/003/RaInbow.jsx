function Rainbow(props) {
    return (
            <div>
                {
                    props.colors.map((itm, i) => {
                        if(itm === 'skyblue') return null;
                        return <div className="rainbow-line" style={{backgroundColor:itm}} key={i}></div>
                })

                }
            </div>
        
    )
}

export default Rainbow;