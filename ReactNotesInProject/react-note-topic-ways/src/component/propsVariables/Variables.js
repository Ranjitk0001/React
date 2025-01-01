import React from 'react'
import Comp1 from './Comp1';
import RouteNavbar from '../Routing/RouteNavbar';

const Variables = () => {
    const lname = "Kale";
    const age = 18;
  return (
   
  
    <>
     <RouteNavbar/>
      <Comp1 var1={lname} var2={age} />
   

    </>
  )
}

export default Variables
