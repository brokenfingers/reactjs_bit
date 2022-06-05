import { useParams } from "react-router-dom";

function Racoon () {

    const {can} = useParams()
    console.log(can)

    return (
    <>
    <h1> Racoon with can no{can}</h1>
    </>
    )
}
    

export default Racoon;