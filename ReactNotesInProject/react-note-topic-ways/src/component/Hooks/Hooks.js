import React, { useState } from 'react'

const Hooks = () => {

// const [variable,updated Variable]=useState('initial Value');

const [count,setCount]=useState(10)



const countUp=()=>{
  setCount(count+1);
}

const countDown=()=>{
  setCount(count-1);
}
  return (
    <>
      <button onClick={countUp}>Counter Up</button>
      <h1>{count}</h1>
      <button onClick={countDown}>Counter Down</button>
    </>
  )
}

export default Hooks

