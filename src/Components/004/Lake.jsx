import React from "react";
import Fish from "./Fish";

class Lake extends React.Component {

    constructor() {
        super();
        this.state = {fish: []}
            }

    spust = () => {
       let fish2 = [...this.state.fish]
       fish2.push(1)
       this.setState({fish: fish2})
    }
    render() {

        

        return (
            <>
                <button onClick={this.spust}>Mygtukas</button>
               {
                   this.state.fish.map((itm, i) => <Fish key={i}></Fish> )
               }
            </>
        )
    }

}

export default Lake;