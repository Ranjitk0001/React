import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { intCount,decCount } from './Action/Index';



const Count = () => {

    const val=useSelector((state) => state.updateNumber)
    // alert(val)
    const dispatch=useDispatch();
  return (
    <>
    <h2> this is Redux</h2>
      <button onClick={()=>dispatch(intCount())}>Inc Count</button>
       <div>Number :-{val}</div>
      <button onClick={()=>dispatch(decCount())}>Dec Count</button>

    </>
  )
}

export default Count
