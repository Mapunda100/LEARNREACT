import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react'
import ThemeContext from './ThemeContext';
const Routing = () => {

    const [ theme ] = useContext(ThemeContext)

    let history = useHistory();

    function handleHistory() {
        history.push("/")
    }
    
    return (
        <div>
            <div className="d-flex justify-content-center">
                <h1>Hello Mr Grayson</h1>
                <h2>Welcome back to the World of Programming</h2>
            </div>

            {<Link to="/" className="btn btn-sm bg-primary">HOME</Link>}
            <div><br/>
            <button style={{ backgroundColor:theme}} onClick={handleHistory} className="bg-green btn btn-secondary ml-4">HOME</button>

            </div>
        </div>
    );
};

export default Routing;