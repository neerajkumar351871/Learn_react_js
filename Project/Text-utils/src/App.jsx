import React from 'react'
import Navbar from './Navbar'
import TextFeilds from './TextFeilds'
import { useState } from 'react'

function App() {
  const handleonChange=(event)=>
  {
    console.log(event.target.value)
  }

  return (
   <>
   <Navbar></Navbar>
  
 <TextFeilds  handleonChange={handleonChange}  ></TextFeilds>
   
   </>
  )
}

export default App