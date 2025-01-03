import React from 'react'
import Two from './Two'
import RouteNavbar from '../../Routing/RouteNavbar'

const One = () => {
    const name="Ranjit"
  return (
    <>
    <RouteNavbar/>
         <h1>This is Third Page</h1> 

         <hr/>
         <Two name1={name}/>
    </>
  )
}

export default One
