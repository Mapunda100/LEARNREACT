import React from 'react';

const Master = () => {

    const Pet=(props)=>{
        return(
            <div>
                <h2>{props.name}</h2>
                <h3>{props.title}</h3>
                <h2>{props.carier}</h2>
            </div>
        )
    }

    return (
       <div>
           <h1>Dar es salaam</h1>
           <Pet name="Sarah" title="girlfriend"/>
             
             
       </div>
    );
};

export default Master;