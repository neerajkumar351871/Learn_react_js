import React from 'react'

function InputText({values}) {
  return (
  <>
  <div className="mb-3">
           <input type="text" className="form-control text-end fs-4" placeholder={values}readOnly />
        </div>
  
  </>
  )
}

export default InputText