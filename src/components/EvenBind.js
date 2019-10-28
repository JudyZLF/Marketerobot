import React, { Component } from 'react';

class EvenBind extends Component {

    constructor(props){
        super(props)
        this.state={
            message: 'hello event'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    
    }
    // clickHandler(){
    //     this.setState({
    //         message: 'bye bye'
    //     }) 
    // }

    clickHandler = ()=>{
        this.setState({
            message: 'bye bye'
        }) 
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
            </div>
        );
    }
}

export default EvenBind;