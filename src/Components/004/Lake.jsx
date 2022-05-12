import React from "react";
import Fish from "./Fish";

class Lake extends React.Component {

    constructor() {
        super();
        this.state = {cls: 'square'}
            }

    spust = () => {
        console.log(this.state)
        this.setState(cl => (cl.cls === 'square' ? {cls : '' } : {cls : 'square' }))
    }
    render() {

        

        return (
            <>
                <button onClick={this.spust}>Mygtukas</button>
                <Fish cls={this.state.cls}></Fish>
            </>
        )
    }

}

export default Lake;