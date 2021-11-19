import { Alert } from 'bootstrap';
import React, { Component } from 'react';

class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'Tanzania'}

        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChanges(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('The selected value is: '+ this.state.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <laabel>
                        Select your Favourite country:
                         <select value={this.state.value} onChange={this.handleChanges}>
                            <option value='Tanzania'>Tanzania</option>
                            <option value='Kenya'>Kenya</option>
                            <option value='German'>German</option>
                            <option value='Uganda'>Uganda</option>
                         </select>
                    </laabel>
                    
                    <input type='submit' value='submit'></input>
               </form>
            </div>
        );
    }
}

export default Select;