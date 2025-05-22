import React from 'react'

function MapMethod({fruit}) {
    console.log(fruit)
  return (
  <ul className="list-group">
    <h1>Fruits Table</h1>
   {
    fruit.map((itmes,index)=>
    {
        return(
        <>
        <li key={index} className="list-group-item">{itmes}</li>
        </>
        )
    })
   }
  

</ul>
  )
}

export default MapMethod