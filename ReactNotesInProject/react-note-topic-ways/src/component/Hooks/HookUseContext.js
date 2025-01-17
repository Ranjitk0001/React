import React, { useState } from 'react'
import InsideHook from './InsideHook'

const HookUseContext = () => {

 
  const[data,setData]=useState('');

  // const name="Ranjit";
  return (
    <>
    <h1>
        HookUseContext
    </h1>
      <InsideHook change={setData}/>
      <h4>Inside to HookUseContext <span>{data}</span> </h4>
    </>
  )
}

export default HookUseContext
