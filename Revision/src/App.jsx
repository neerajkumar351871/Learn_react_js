import React from "react"
import Props from "./Props"
import MapMethod from "./MapMethod"
import Handling from "./Handling"
function App()
{
  /* props*/
  const  Student=[
    {
    Name:'Neeraj kumar',
    Roll_no:98,
    Subject:'Reactjs',
    Department:'IT(Information Techonlogy)'
  },
  
  {
    Name:'Anuj  kumar',
    Roll_no:99,
    Subject:'Reactjs',
    Department:'IT(Information Techonlogy)'
  }
  ]
  const fruits=['Apple','Mango','Grapes','Orange']
  return(
  <>
{/*<Props Detail={`Student Name: ${Student[0].Name} and Roll_no :${Student[0].Roll_no},Student Subject :${Student[0].Subject} and Department :${Student[0].Department}`}></Props>
 <Props
        Detail={`Student Name: ${Student[1].Name}, Roll_no: ${Student[1].Roll_no}, Student Subject: ${Student[1].Subject}, Department: ${Student[1].Department}`}
      />
  */}
    <MapMethod fruit={fruits} ></MapMethod> 
    <Handling></Handling>   
    </>
  )
}
export default App