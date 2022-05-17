import { useState } from "react";
import randColor from "../../Functions/randColor";

function Apskritimas({l, visible, widt}) {

    const [cl, setColor] = useState('');

    const onPressEarr = () => {
        setColor('#'+randColor())
    }

    if(visible) {
       return <div onClick={onPressEarr} className='apskritimas' style={{left: l, bottom: '88%', borderWidth: widt, backgroundColor: cl}}></div> 
    }
    return null;
}

export default Apskritimas;