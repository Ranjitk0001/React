import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const gift="abc";

    const [r,setR]=useState('');
  return (
    <>
    <h1>Hello this is parent component and my return gift is <b>{r}</b> </h1>
      
      <Child g={gift} ret={setR}/>
    </>
  )
}

export default Parent
