import React, { useEffect, useRef } from 'react'

const HooksUseRef3 = () => {
     const el1=useRef("");
    
    // const refe1=el1.current;
    // console.log(refe1)//this type not use it 
    
        useEffect(()=>{
            el1.current.focus();
            
        })
  return (
    <>
      this is useref3 states
      <input ref={el1} type={'text'}/>
    </>
  )
}

export default HooksUseRef3
