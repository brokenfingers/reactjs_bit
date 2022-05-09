import rand from "../../Functions/rand";
import Briedis from "./Briedis";
import Meska from "./Meska";

function Miskas(){
    return (
        <>
            {rand(0, 1) ? <Meska></Meska> : <Briedis></Briedis>}
        </>
    )
}

export default Miskas;