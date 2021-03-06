import { useState } from "react";
import randColor from "../../Functions/randColor";

function Apskritimas({l, y, visible, widt}) {

    const [cl, setColor] = useState('');

    const onPressEarr = () => {
        setColor('#'+randColor())
    }

    if(visible) {
       return <div onClick={onPressEarr} className='apskritimas' style={{left: l, bottom: y, borderWidth: widt, backgroundColor: cl}}></div> 
    }
    return null;
}

export default Apskritimas;