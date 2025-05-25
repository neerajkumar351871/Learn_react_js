import React from 'react'
import { useState } from 'react'

function App() {
  const [data,setdata]=useState("Blank")
  const handlonChange=(event)=>
  {
   setdata(event.target.value)
  }
  const handlonsubmit=(details)=>
  {
    details.preventDefault()
    /*preventDefault()
    This is used to hold the value of forms
    */
  }
  return (
<>
<form className="con" onSubmit={handlonsubmit}>

  <input type="text" name="" id="" onChange={handlonChange}/>
  <p>{data}</p>
</form>

</>
  )
}

export default App