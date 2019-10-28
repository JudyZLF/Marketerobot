import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {
        //内容只在true时显示
        return this.state.isLoggedIn && <div>Welcome Judy</div>

        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Judy</div> :
        //     <div>Welcome Guest</div>
        // )

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Judy</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        // if (this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Judy</div>
        //     )
        // }else {
        //     return (
        //         <div>Welcome Guest</div>    
        //     );
        // }
    }
}

export default UserGreeting;