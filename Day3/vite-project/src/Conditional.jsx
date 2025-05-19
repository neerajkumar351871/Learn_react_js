import React from 'react'

function Conditional() {
     let names =['Neeraj','Prince','Anuj',"Arsh",'Aditya']

     
   
  return (<>        
  <div>
{ names.length === 0 ?<h1> no</h1> : null}
  
      <div>
       {
          names.map((items)=>
        {
            return <h1>{items}</h1>
        })
        }
        
    </div>
    
</div>
    </>

  )
}

export default Conditional