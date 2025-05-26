import React from 'react'
import Data from './Data'
import { student } from './Store/Storage'

function App() {
  return (
    <>
    <student.Provider  value="Sucess">
      <Data></Data>
    </student.Provider>
  </>

  )
}

export default App