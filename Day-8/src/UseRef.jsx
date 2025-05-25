import React from 'react'
import { useRef,useState} from 'react';

function UseRef() {
    const Details= useRef()
    const[dataes,setdataes]=useState();
    const handleClick=()=>
    {
       // items.preventDefault();
        console.log(Details.current.value);
        setdataes(Details.current.value);
        Details.current.value=" ";
    }
  return (
    <div>
<input type="text" name="" id="" ref={Details}/>
        <button onClick={handleClick}>Clickme!</button>
        <p>{dataes}</p>
    </div>
  )
}

export default UseRef