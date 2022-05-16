import Apskritimas from "./Apskritimas";
import KvadratasChild from "./KvadratasChild";

function KvadratasParent({bigColor, smallColor, sqOrCirc}) {

        return (

            <div className="kvadratas-big" style={{backgroundColor: bigColor}}>
                {
                   sqOrCirc === 'kvadr' ? <KvadratasChild smallColor={smallColor}></KvadratasChild> : null
                }        
                {
                   sqOrCirc === 'apskr' ? <Apskritimas smallColor={smallColor}></Apskritimas>  : null
                }        
 
            </div>
           
        )
        
    
}

export default KvadratasParent;