import React from "react"

class FatDog extends React.Component{
    constructor() {
        super();
        this.state = { size: 20 };
    }

    onButtonPress = () => {
        this.setState({size: 40});
        console.log('ivyko paspaudimas')
    }

    render() {
        return (
            
            <>
             <button onClick={this.onButtonPress}>FatDog</button>
            <h3 style={{color:this.props.color, fontSize:this.state.size+'px'}}>Fat Dog {this.state.size}</h3>
           
            
            </>
        )


    }
    
}

export default FatDog;