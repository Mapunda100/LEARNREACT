import { width } from 'dom-helpers';
import React from 'react';
import { useState, useContext } from 'react';
import ThemeContext from './ThemeContext';
import { Link } from 'react-router-dom'
import logo from './logo.png'
const COURSE = ["COMPUTER ENGINEERING", "COMPUTER SCIENCE", "TELECOM ENGINEERING", "ELECTRONIC SCIENCE"];

const Students = () => {
 
    const [course, setCourse] = useState([])
    const [studentName, setStudentName] =useState([]);
    const [studentno, setStudentNo] = useState([]);
    const [theme] = useContext(ThemeContext)

    function courseLearned(e) {
       setCourse(e.target.value)
    };

    function Write() {
       <h1>Hello Mr Grayson</h1>
    }
    
    function studentnaming(e) {
        setStudentName(e.target.value)
    }

    let regino = (e) => {
        setStudentNo(e.target.value)
    }

    function submit(e) {
        e.preventDefault();
        console.log("form has been submitted")
        console.log("The name of student is: ", (studentName))
        console.log("Student Registration Numbe is: ",(studentno))
        console.log("The Course of the student is: ",(course))
    }

    function Print(e) {
        e.preventDefault();
         <li>{studentName}</li> 
    
    }


    return (

        <div>
            <form onSubmit={submit} className="  flex-direction-sm-4
            justify-content-space-flex-end
            flex-wrap: wrap mt-3 d-flex
            ">
                  <div className="mt-3">
             <label>
      Select Your Course Here  :
      <select
      className=""
      id="animal" 
      onChange={courseLearned}
      >
        
        <option />
            {
                COURSE.map(course=>(
                    <option value={course} key={course}>
                        {course}
                    </option>
                ))
            }
    
      </select>

                </label>
                
               
        </div>
            <div>
                 <label>
                    Enter Your Name here  :
                    <input
                    value={studentName}
                    onChange={studentnaming}
                    
                    />
                </label>
            </div>

             <div>
                 <label>
                    Enter Your REG NO here:
                    <input
                    value={studentno}
                    onChange={regino}
                    
                    />
                </label>
            </div>
            <button className="btn btn-md bg-primary d-flex text-white" type="submit">SUBMIT</button>

        </form>
          
            <div className="d-flex 
                  flex-direction-row
                  bg-primary mt-5 text-white text-align-center">
                {
                    COURSE.map(course => (
                        <li>{ course}</li>
                    ))
            }
            </div>
            
            <button style = {{backgroundColor: theme}}>
                
                    PrintAll           
               
            </button>
            <div>
                <span> My name is {studentName}</span>
                <br/>
                <span> My course is {course}</span>
                <br/>
                <span> My Reg number is {studentno}</span>
            </div>
        </div>       
    );
};

export default Students;