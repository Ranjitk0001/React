import React, { useEffect, useState } from 'react'
import RouteNavbar from '../Routing/RouteNavbar';

const Api3 = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
       
          const res = await fetch('https://jsonplaceholder.typicode.com/users');
          const mainData = await res.json();
          
          setData(mainData);
      
      }
    
      useEffect(() => {
        getData();
      }, []);
    
      return (
        <>
          <RouteNavbar />
         {
            data.map((currentVal)=>{
                return(
                <h1>Id:- {currentVal.id} ,name:- {currentVal.name}</h1>
                );
            })

            
         }
        </>
      );
}

export default Api3
