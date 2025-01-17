import React from 'react'

const Child = (props) => {
    const returnGift="bca";

    props.ret(returnGift)
  return (
    <>
      <h1> Hello this is child Comp and my gift is<b> {props.g}</b></h1>
    </>
  )
}

export default Child
