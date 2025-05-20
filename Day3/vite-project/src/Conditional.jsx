import React from 'react'
import Propes from './Propes';

function Conditional() {
     let names =['Neeraj','Prince','Anuj',"Arsh",'Aditya']

     let named='neeraj';
   
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
    <Propes light={named}/>
</div>
    </>

  )
}

export default Conditional