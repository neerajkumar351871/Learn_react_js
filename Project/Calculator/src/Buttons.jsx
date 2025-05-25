import React from 'react'

function Buttonsjsx({btnClick}) {
   const numbers = ['C', '1', '2', '3', '+', '4', '5', '6', '-',  '7', '8','8', '/','=','*',0];
  return (
    <div className="row g-2">
          {numbers.map((num, index) =>
          (
              <div key={index} className="col-3">
                <button type="button" className={`btn btn-primary w-100 py-3`} onClick={()=>btnClick(num)}>
                  {num}
                </button>
              </div>
            ) 
          )}
        </div>
  )
}

export default Buttonsjsx