import CarPrice from "./CarPrice";
import ColorMark from "./ColorMark";

function Car(props) {
    return (
        <>
        <h2 style={
            {fontSize: props.size+'px',
                fontFamily:props.font}
        } >{props.color} {props.maker} <ColorMark clr={props.clr} msize={props.markSize}></ColorMark><CarPrice price={props.pr}></CarPrice></h2>
        </>
        )
}

export default Car;