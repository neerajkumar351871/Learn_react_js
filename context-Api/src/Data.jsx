import React from 'react'
import { useContext } from 'react'
import { student } from './Store/Storage'

function Data() {
    const  de= useContext(student);
  return (
    <>
    <h1>{de}</h1>
    </>
  )
}

export default Data