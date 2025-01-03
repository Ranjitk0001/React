import React from 'react'
import { NavLink } from 'react-router-dom'
const RouteNavbar = () => {
  return (
   
    <>

  
  
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <NavLink className="nav-link active" to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
          <NavLink className="nav-link active" to={'/hooks'}>Hooks</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to={'/props'}>Props</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" to={'/about'}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to={'/api'}>Api</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
  </>

    
  )
}

export default RouteNavbar
