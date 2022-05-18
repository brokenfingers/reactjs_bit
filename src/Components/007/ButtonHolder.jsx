import { useState } from "react";

function ButtonHolder({virvute, border}) {

    

    return (
        <div className='bth' style={{borderWidth: border+'px'}}>
            <button onClick={virvute} >change border</button>
        </div>
    )

}

export default ButtonHolder;