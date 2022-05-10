
function Circle(props) {
    if(props.size<200) {
        return <div className="circle" style={{top:"0", right: "0", backgroundColor:props.color}}></div>;
    } else {
        return <div className="circle" style={{bottom:"0", left: "0", backgroundColor:props.color}}></div>;
    }
    return null;
}

export default Circle;