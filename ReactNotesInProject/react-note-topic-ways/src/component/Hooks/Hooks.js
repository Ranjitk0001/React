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
// Name
const [name,setName]=useState("Hello from React js");
const showName=()=>{
  setName("js");
}
  return (
    <>
      <button onClick={countUp}>Counter Up</button>
      <h1>{count}</h1>
      <button onClick={countDown}>Counter Down</button>



      <h1>Name</h1>
      <h1>{name}</h1>
      <button onClick={showName}>React</button>
    </>
  )
}

export default Hooks

