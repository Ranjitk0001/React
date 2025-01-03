import React from 'react'
import Three from './Three'

const Two = (props) => {
    const name2=props.name1;
  return (
    <>
    
         <h1>This is Second Page</h1> 
         <h5>This is a props by One.js and  the value is {props.name1}</h5>
         <hr/>
         <Three name3={name2}/>
    </>
  )
}

export default Two
