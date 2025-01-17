import React, { useEffect, useRef } from 'react'
import RouteNavbar from '../Routing/RouteNavbar';

const HooksUseRef2 = () => {
    const el1=useRef("");

// const refe1=el1.current;
// console.log(refe1)//this type not use it 

    useEffect(()=>{
        const refe1=el1.current;
        console.log(refe1);
    })


  return (
    <div>
         <RouteNavbar/>
      
      this is useref2 stateS
      <h1 ref={el1}>MyRef</h1>
      
    </div>
  )
}

export default HooksUseRef2
