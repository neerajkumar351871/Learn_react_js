import React from 'react'
import { useRef,useState } from 'react'

function App() {
  // Practice  of Prevoius Topics
  const data=useRef();
  const[first ,setfirst] = useState("Null")
  const  handlClick=(hold)=>
    {
      //hold.preventDefault();
   
    setfirst(data.current.value);
    data.current.value=" ";
    } 
  return (
    <>
    
    <form onSubmit={handlClick}>
      <input type="text" name="" id=""  ref={data}/>
      <button >Clickme!</button>
      <p>{first}</p>
    </form>
    </>

  )
}

export default App