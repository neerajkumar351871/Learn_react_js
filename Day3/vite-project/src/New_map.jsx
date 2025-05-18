import React from 'react'

function New_map() {
    const names =['Neeraj','Prince','Anuj',"Arsh",'Aditya']
  return (
   <>
     {/* <>  </> This is fragments*/}
     <ol>
        {/* This is map()  */
            names.map((student)=>
            <li>{student}</li>
            )
        }
     </ol>
    
    </>
  )
}

export default New_map