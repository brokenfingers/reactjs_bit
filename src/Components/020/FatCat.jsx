import { Link, Outlet } from "react-router-dom";

function FatCat() {

    return(
        <>
        <Link to='yellow'>Yellow</Link>
        <Link to='orange'>Orange</Link>
        <Link to='red'>Red</Link>
        <div className="card">
        <Outlet></Outlet>

        </div>
        </>
        
    )
}

export default FatCat;