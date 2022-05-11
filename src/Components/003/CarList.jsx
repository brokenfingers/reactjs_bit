function CarList(props) {

    return (<div> {
        props.cars.map((itm, i) => <p key={i}>{itm}</p>)
        }
    </div>
            
    )
}

export default CarList;