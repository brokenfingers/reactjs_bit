function ColorMark(props) {
    return(
        <div className="color-mark" style={{backgroundColor: props.clr,
            width:props.msize+'px',
        height:props.msize+'px'}}></div>
    )
}

export default ColorMark;