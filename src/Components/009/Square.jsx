import { useEffect, useState } from "react";

function Square({i}) {

    const [yes, setYes] = useState(true);

    useEffect(()=>{
        console.log(i, 'gime') //paleidziama kai komponentas susikure
        return () => console.log(i, 'mire') //paleidziama kai komponentas sunaikinamas
    }, [])
    return(
        <>
            <div  className={'square'} onClick={()=>setYes(i=>!i)}></div>
        </>
    )
}

export default Square;