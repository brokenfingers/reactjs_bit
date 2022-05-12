import React from "react";


class Fish extends React.Component{


    constructor() {
        super();
        // this.state = {clss: this.props.cls}

        
    }

    render() {

        if(this.props.cls !== '') {
           return <div className={this.props.cls}></div>
        }
        return null;
//         return (
//         <>
//             <div className={this.props.cls}></div>
//         </>
// )
    }

}


export default Fish;