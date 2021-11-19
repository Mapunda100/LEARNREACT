import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Pet from './Pet'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Routing from './Routing';
import Clock from './Clock';
import SearchParagms from './SearchParam';
import Students from './Students';
import ThemeContext from './ThemeContext';
import ClassComponent from './ClassComponent';
import List from './List';
import Display from './Display';
import Select from './Select';

const RenderAll = () => {

const theme = useState("lightblue");

    return (
        <ThemeContext.Provider value={theme}>

        <div>
             <React.StrictMode> 
    <Router>
      <Switch>
          <Route path='/' exact><App/></Route>
          <Route path='/routing' exact><Routing/></Route>
          <Route path='/searching' exact><SearchParagms/></Route> 
          <Route path='/student' exact><Students /></Route>
          <Route path='/clock' exact><Clock/></Route>
          <Route path='/list' exact><List/></Route>
          <Route path='/display' exact><Display/></Route>
          <Route path='/select' exact><Select/></Route>
          
          {/* <Route path='/class'><ClassComponent /></Route> */}
       </Switch>
  </Router>
  </React.StrictMode>,
            </div>
        </ThemeContext.Provider>
            
    );
};

export default RenderAll;