import React, { Component } from 'react';

class Main extends Component{
    render(){
        return <h1>main {this.props.name} and {this.props.heroName}</h1>
    }
}

export default Main;