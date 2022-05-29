import Car from "./Car";
import Car2 from "./Car2";

function CarNames ({cars, setCarItem, activeCar, setActiveCar}) {

   

    

    return (
        <>
            <div className="card">
            <p className='title'>Car types</p>
            { 
                cars.map(itm => <Car key={itm.id} car={itm} ></Car>)
            }
        </div>
            <div className="card">
            <p className='title'>Car types</p>
            <div>
           
            </div>
            { 
                cars.map((itm, i) => <Car2 key={i} car={itm} setCarItem={setCarItem} activeCar={activeCar} setActiveCar={setActiveCar}></Car2>)
            }
        </div>
        </>
    
    )
}

export default CarNames;