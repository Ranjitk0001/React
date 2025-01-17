import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';

const Login = () => {
  const [password, setPasswordValue] = useState("");
  const [userId, setUserIdValue] = useState("");


const setPassword = (e) => {
    setPasswordValue(e.target.value);
}

const setUserId = (e) => {
    setUserIdValue(e.target.value);
}

const handleSubmit = async (e) => {
    //prevent default
    e.preventDefault();

    //api call
    console.log("this is our data "+ userId +"   "+ password )
    
    //create an object with userId and password for passing the api
    const data = {
        "userId": userId,
        "password": password
    }

    try{
        const response = await axios.post("http://localhost:8084/api/v1/loginUser", data);

        console.log("this is the response " + response.data);
        if(!response.data) {
            alert("Invalid User Id or Password");
        }
        else if (!response.data==null){
            alert("Invalid User Id or Password");

        }
        else {
           
            alert("Login Successfull");
            alert(`userId: ${userId}\n password: ${password}`)
        }
        
    } catch(error) {
        alert("Invalid User Id or Password");
        console.log("Invalid User Id ");
        console.error( error);
    }




}

const redirectToRegister = () => {
    window.location.href = "/register";
}

  return (
    <>
    <Navbar />
      
      <h1> Welcome to login page</h1>
        <div className="container">
           <form onSubmit={handleSubmit}>

            <label>User ID:</label>
            <input type="emial" placeholder="Enter your user id" value={userId} onChange={setUserId}/>
            <br></br>
            <br></br>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={setPassword}/>
            <br></br>
            <br></br>

            <button className="btn btn-primary" type="submit">Login</button>
            <br/><br/>
            <button className="btn btn-primary" onClick={redirectToRegister}>Register</button> 
            
           </form>

        </div>
    </>
  )
 
}

export default Login
