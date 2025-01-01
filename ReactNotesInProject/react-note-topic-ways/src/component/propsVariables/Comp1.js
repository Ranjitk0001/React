import React from 'react'
import Comp2 from './Comp2'

const Comp1 = (props) => {
    const name="Ranjit"
    const number=654321
  return (
    <div>
      <h1>Comp1</h1>
    <h1>In this Comp1.js==={name}</h1>  

      <br/>
      <h1>Variable from App.js==={props.var1}</h1>
      <h1>Another Variable from App.js==={props.var2}</h1>
       <hr/>
       <Comp2 fname={name} fnumber={number}/>
    </div>
  )
}

export default Comp1
