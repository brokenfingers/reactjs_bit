function CarList(props) {

    return (<div> {
        props.cars.map((itm, i) => {
            if(itm == 'blue') return null;
           return <p key={i}>{itm}</p>; 
        }
        )
        }
    </div>
            
    )
}

export default CarList;