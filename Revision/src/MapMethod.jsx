import React from 'react';

function MapMethod({ Detail }) {
  console.log(Detail);

  return (
    <ul className="list-group">
      <h1>Fruits Table</h1>
      {
Detail.map((itms)=>
{
  return(
    <>
    <h1>{itms}</h1>
    </>
  )
})

      }
    </ul>
  );
}

export default MapMethod;
