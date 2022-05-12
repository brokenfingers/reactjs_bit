import React from "react"

class FatDog extends React.Component{
    constructor() {
        super();
        this.state = { size: 20 };
    }
    
    onButtonPress = () => {
        // this.setState(s => ({size: s.size===20 ? 40 : 20}));
        this.setState(s => (s.size=== 20? {size : 40} : {size : 20} ));

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