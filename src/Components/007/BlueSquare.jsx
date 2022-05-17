import { useState } from "react";

function BlueSquare() {


    const [ clr, colorFunct] = useState('blue');

   const makeRed = () => {
        colorFunct('red');
    }

    return(
        <>
            <div className='kvadratas-big' style={{backgroundColor: clr}}>

                <button onClick={makeRed} >change color</button>
            </div>
            
        </>
    )
}

export default BlueSquare;