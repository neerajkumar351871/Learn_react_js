import React from 'react'
import Fatbers from './Fatbers'
import { useState } from 'react'
function App()
{
  const[Simple,setSimple]=useState('');
  const changeValue =(events)=>
    {
    setSimple(events.target.value);
    }
  return (
<>
<Fatbers changeValue={changeValue} Simple={Simple}  ></Fatbers>

</>
  )
}

export default App