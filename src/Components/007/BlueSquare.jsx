import { useState } from "react";
import randColor from '../../Functions/randColor'

function BlueSquare() {


    const [ clr, colorFunct] = useState('blue');

   const makeRed = () => {
        colorFunct('red');
    }

    const makeRandom = () => {

        colorFunct('#'+randColor());
    }

    const toggleBlueRed = () => {
        colorFunct( clr === 'blue' ? 'red' : 'blue')
    }

    return(
        <>
            <div className='kvadratas-big' style={{backgroundColor: clr}}>

                <button onClick={makeRed} >change to red</button>
                <button onClick={makeRandom} >ramdom backgroudn</button>
                <button onClick={toggleBlueRed} >toggleRedBlue</button>

            </div>
            
        </>
    )
}

export default BlueSquare;