import React from 'react'
import Two from './Two'
import RouteNavbar from '../../Routing/RouteNavbar'
import { useContext } from 'react'
import { firstName,lastName } from '../../../App'
const One = () => {

    const fname=useContext(firstName);
    const lname=useContext(lastName);

    const name="Ranjit"
  return (
    <>
    <RouteNavbar/>
         <h1>This is One Page</h1> 
         <h2>First name is <b>{fname} </b>and the Last name is <b>{lname} </b></h2>
         <hr/>
         <Two name1={name}/>

    </>
  )
}

export default One
