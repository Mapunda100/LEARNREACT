import React from 'react';
import { useState, useEffect } from 'react';
import Pet from './Pet'


const ANIMALS = ["dog", "goat", "cow", "giraffe"]
const UNIVERSITY = ["UDSM", "NIT", "SAUTI", "TIA"]

const SearchParagms = () => {

    const [ location, setLocation] = useState("");
    const [ animal, setAnimal ]= useState("");
    const [university, setUniversity] =useState("");
    const [pets, setPet ]= useState([])


    useEffect(()=>{
        // requestPet();
        console.log(university)
    }, [university]) 

    async function requestPet(){
        const res = await fetch(
            'http://pets-v2.dev.apis.com/pets?animal=${animal}&location=${location}'
        );

        const json= await res.json();

        console.log(json)

        setPet(json.Pet)
    }

    function updatelocation(e){
        setLocation(e.target.value)
    }

    function changeSelected(e){
        setAnimal(e.target.value);
        console.log(e.target.value);
    }

    return (
       <div className="">

<div className="search-params">

<form>
  <label>
      Locaction
      <input id="location"  value={location.toUpperCase()} placeholder="Location"
      className="" onChange={updatelocation}
      />
  </label>

 </form>  

 <div>
 <label>
      Animal:
      <select
      id="animal" 
      onChange={changeSelected}
      >
        
        <option />
            {
                ANIMALS.map(animal=>(
                    <option value={animal} key="animal" key={animal}>
                        {animal}
                    </option>
                ))
            }
    
      </select>

  </label>
 </div>         


</div>

<div>
    <label>
        university:
        <select
        id="university"
        onChange={(e)=>(e.target.value)}
        >
            {UNIVERSITY.map(university=>(
                <option value={university} key={university}>{university}
                </option>
            ))}
        </select>
    </label>
</div>

<button className="btn-btn background-primary">Submit</button>

       </div>
    );
};

export default SearchParagms;