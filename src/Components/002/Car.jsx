function Car(props) {
    return (
        <h2 style={
            {fontSize: props.size+'px',
                fontFamily:props.font}
        } >{props.color} {props.maker} </h2>
    )
}

export default Car;