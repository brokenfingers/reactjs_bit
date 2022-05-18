import { useState } from "react";
import randColor from '../../Functions/randColor'
import Apskritimas from "./Apskritimas";
import ButtonHolder from "./ButtonHolder";

function BlueSquare({cls, nosis}) {


    const [ clr, colorFunct] = useState('blue');
   
    const [ border, setBorder ] = useState(1);


    const growBorder = () => {
        setBorder(i => i === 10 ? 1 : 10)
    }

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
            <div className="kvadratas-big" style={{backgroundColor: clr, 
                        borderWidth: border,
                        borderRadius: cls ? '50%' : 0,
                        position: "relative"

                        }}>
                <Apskritimas l='-64px' visible={cls} widt={border} y='88%'></Apskritimas>
                <Apskritimas l='250px' visible={cls} widt={border} y='88%'></Apskritimas>
                <Apskritimas l='104px' visible={nosis} widt={border} y='36%'></Apskritimas>

                <button onClick={makeRed} >change to red</button>
                <button onClick={makeRandom} >ramdom backgroudn</button>
                <button onClick={toggleBlueRed} >toggleRedBlue</button>
                <ButtonHolder virvute={growBorder} border={border}></ButtonHolder>

            </div>
            
        </>
    )
}

export default BlueSquare;