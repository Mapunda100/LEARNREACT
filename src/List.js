import React from 'react';


    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const NAMES = ["Grayson", "David", "Ezekiel", "Ramadhani"];

const List = () => {

    const listNumber = numbers.map((number) =>
        <li key={number}>{number}</li>)
    
    return (
        <div className="bg-secondary">
            
            <div style={{color:'white'}}>
                <h2>{ listNumber }</h2>
            </div>
            <div style={{background:'indigo', color:'white'}}>
                {
                    NAMES.map(name  => (
                       
                            <li key={name} >{ name}</li>
                       
                    ))
                }
             </div>
          </div>  
       
    );
};

export default List;