import React from 'react'

function Handling() {
    const handleClick=()=>
    {
        console.log("hello")
    }
  
    return (
   <>
   
   <button onClick={handleClick}>Clickme!</button>
   <div style={{background:'red',height:'200px',width:'200px'}}> </div>
   </>
  )
}

export default Handling