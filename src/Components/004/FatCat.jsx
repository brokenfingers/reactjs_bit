import React from "react";

class FatCat extends React.Component {

    constructor() {
        super();
        this.state = { weight: 25};
    }

    paspaudimas = () => {
        console.log('ivyko paspaudimas')
        this.setState({weight: 33})
    }

    render()
    {
        return (
            <>
            <button onClick={this.paspaudimas}>Click</button>
            <h2>Fat Cat {this.props.color} {this.state.weight}</h2>
            </>
        );
    }
}

export default FatCat;