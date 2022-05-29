// import { useState } from "react"


function Car({car}) {


    return(
        <>
            <div>
                <code>{car.type}</code>
                <span> {car.price}</span>
            </div>
        </>

    )
}

export default Car;