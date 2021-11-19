import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props)
        this.state={date: new Date()}
    }

    componentDidMount() {
        this.TimerId = setInterval(
            ()=>this.tick(), 3000
        )
    }

    componentWillUnmount() {
        clearInterval(this.TimerId)
    }

     tick() {
         this.setState({
             date: new Date()
         });
    }
    render() {
        return (
            <div style={{background:'red', textAlign:'center'}}>
                <h1>This is the current Time in East Africa zone</h1>
                <h2>The time is { this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;