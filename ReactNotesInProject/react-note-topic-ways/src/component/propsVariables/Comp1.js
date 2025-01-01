import React from 'react'

const Comp1 = (props) => {
    const name="Ranjit"
  return (
    <div>
      <h1>Comp1</h1>
    <h1>In this Comp1.js==={name}</h1>  

      <br/>
      <h1>Variable from App.js==={props.var1}</h1>
      <h1>Another Variable from App.js==={props.var2}</h1>
       <hr></hr>
    </div>
  )
}

export default Comp1
