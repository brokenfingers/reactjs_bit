import { useState } from "react";
import randColor from '../../Functions/randColor'
import Apskritimas from "./Apskritimas";

function BlueSquare({cls}) {


    const [ clr, colorFunct] = useState('blue');
    const [ border, setBorder ] = useState(1);


   const makeRed = () => {
        colorFunct('red');
    }

    const makeRandom = () => {

        colorFunct('#'+randColor());
    }

    const toggleBlueRed = () => {
        colorFunct( clr === 'blue' ? 'red' : 'blue')
    }

    const growBorder = () => {
        setBorder(i => i === 10 ? 1 : 10)
    }

    return(
        <>
            <div className="kvadratas-big" style={{backgroundColor: clr, 
                        borderWidth: border,
                        borderRadius: cls ? '50%' : 0,
                        position: "relative"

                        }}>
                <Apskritimas l='-64px' visible={cls} widt={border}></Apskritimas>
                <Apskritimas l='250px' visible={cls} widt={border}></Apskritimas>

                <button onClick={makeRed} >change to red</button>
                <button onClick={makeRandom} >ramdom backgroudn</button>
                <button onClick={toggleBlueRed} >toggleRedBlue</button>
                <button onClick={growBorder} >change border</button>

            </div>
            
        </>
    )
}

export default BlueSquare;