import React from 'react'

const InsideHook = ({change}) => {
  const name2="Inside to HooksUseContext";
  change(name2);
  return (
    <>

     <h3>InsideHooks</h3> 
     {/* <h4>HookUseContext to  {change}</h4> */}
    </>
  )
}

export default InsideHook
