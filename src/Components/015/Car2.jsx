import { useState } from "react"


function Car2({car, setCarItem, activeCar, setActiveCar}) {

   
    const handleClrChange = () =>{
        setActiveCar(car.id)
        setCarItem(car)
    }



    return(
        <>
            <div onClick={handleClrChange} style={{backgroundColor: activeCar === car.id ? 'skyblue': 'white'}}>
                <code>{car.type}</code>
                <span> {car.price}</span>
            </div>
        </>

    )
}

export default Car2;