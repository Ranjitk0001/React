import React from 'react'

import RouteNavbar from './RouteNavbar'

const StudentLIst = () => {
  return (
    <>
     <RouteNavbar/>
      <h1>Student List</h1>
       <div className="container mt-5">
           <h1>Bootstrap Table Example</h1> 
           <table className="table table-striped table-hover"> 
            <thead> <tr> 
              <th scope="col">#</th>
               <th scope="col">First Name</th>
                <th scope="col">Last Name</th> 
                <th scope="col">Email</th> </tr> </thead> 
                <tbody> <tr> <th scope="row">1</th> 
                <td>John</td> <td>Doe</td> <td>john.doe@example.com</td> </tr> 
                <tr> <th scope="row">2</th> <td>Jane</td> <td>Smith</td> <td>jane.smith@example.com</td> 
                </tr> </tbody></table></div>
    </>
  )
}

export default StudentLIst
