import React, { Component } from 'react';

class Display extends Component {

    constructor(props) {
        super(props)
        this.state = { value: '' }
        
        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChanges(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('My name is: ' + this.state.value);
}

    render() {
        return (
            <div style={{ alignContent:'center'}}>
                <form  onSubmit={this.handleSubmit}>
                    <label>
                        Enter your Name:
                        <input type='text'
                            value={this.state.value}
                            onChange={this.handleChanges}></input>
                    </label>
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
        );
    }
}

export default Display;