import React from 'react';
import InputText from './InputText';
import Buttons from './Buttons.jsx';
import { useState } from 'react';

function App() {
 const [values,setValues]=useState("")
 const btnClick=(numbers)=>
 {
 if(numbers =="C")
 {
  setValues(" ")
 }
 else if(numbers ==="="){
  const res= eval(values);
  setValues(res);

 }
 else
 {
  let result = values+numbers;
  setValues(result);
 }

 }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100" >
      <div className="border rounded shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
      <InputText values={values}></InputText>
        <Buttons  btnClick= { btnClick}></Buttons>
      </div>
    </div>
  );
}

export default App;