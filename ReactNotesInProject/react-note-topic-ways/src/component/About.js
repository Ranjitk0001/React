import React from 'react'
import RouteNavbar from './Routing/RouteNavbar'
import { NavLink ,Outlet} from 'react-router-dom'

const About = () => {
  return (
    <>
     <RouteNavbar/>
      <h1>This is About us page</h1>


      <NavLink  to={'/about/contact-Us'}>Contact-Us</NavLink>
      <hr/>
      <Outlet/>
      
    </>
  )
}

export default About
