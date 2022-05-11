function Rainbow(props) {
    return (
            <div>
                {
                    props.colors.filter(a=> a.pos === 'top').map((itm, i) => <div className="rainbow-line" style={{backgroundColor:itm.color, height:itm.size}} key={i}></div>)
                }
                <div className='bl'></div>
                {
                    props.colors.filter(a=> a.pos === 'bottom').map((itm, i) => <div className="rainbow-line" style={{backgroundColor:itm.color, height:itm.size}} key={i}></div>)
                }
            </div>
        
    )
}

export default Rainbow;