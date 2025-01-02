import React, { useRef } from 'react'
import RouteNavbar from '../Routing/RouteNavbar';

const HooksUseRef = () => {
   //(THIS IS IMAGIEUT REFERENCE FORCE)


    const ref=useRef(0);//Only for reference 
    ref.current='Ranjit'//updating  a referance

    // const handleClick=()=>{
    //   ref.current=ref.current+1;
    // }
  return (
    <>
    <RouteNavbar/>
      
      this is useref1 state
      <h1>{ref.current}</h1>

    
    {/* <button type="button" className="btn btn-primary" onClick={handleClick}>Click me to ++ Count</button> */}
    </>
  )
}

export default HooksUseRef
