import { Link, Outlet } from "react-router-dom";

function Beardman () {

    return (
    <>
    <h1> Beardman</h1>
    <Link to='green'>Green way</Link>
    <Link to='pink'>Pink way</Link>
        <div className='card'>
            <Outlet></Outlet>
        </div>
    </>
    )
}
    

export default Beardman;