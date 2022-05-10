import Circle from './Circle';

function Square(props) {
    
    if(+props.size < 100 ) return null;
    return <div className="figure" style={{width: props.size+'px', height: props.size+'px'}}><Circle size={props.size} color={props.color}></Circle></div>
}

export default Square;