import { useContext } from "react";
import Number3 from "./Number3";
import Number5 from "./Number5";

function Va({number}) {
    const number3 = useContext(Number3)
    return (

    <>
    <h2 >{number}</h2>
    <h2 >{number3.number3}</h2>
    <h2 >{number3.number5}</h2>
    <h2 >
        <Number5.Consumer>
            {
               value => value
            }

        </Number5.Consumer>

    </h2>
    <button onClick={()=>number3.setNumber9(i=>+i+9)}>+9</button>
    
    </>

    )
}

export default Va;