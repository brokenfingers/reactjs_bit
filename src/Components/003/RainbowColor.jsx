function RainbowColor(props) {

    return (
    <div className="rainbow-line"  style={{backgroundColor:props.color.color}}>{props.color.color}</div>
    )
}

export default RainbowColor;