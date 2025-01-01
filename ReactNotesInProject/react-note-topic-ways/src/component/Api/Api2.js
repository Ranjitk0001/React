// import React, { useEffect } from 'react'
// import RouteNavbar from '../Routing/RouteNavbar';

// const Api2 = () => {
//     const getData = async () => {
//         try {
//           const res = await fetch('https://jsonplaceholder.typicode.com/users');
//           const mainData = await res.json();
//           mainData.map((curentValue) => {
//                 console.log("User ID:", curentValue.id);
//               });
    
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       }
    
//       useEffect(() => {
//         getData();
//       }, [1]);
    
//       return (
//         <>
//           <RouteNavbar />
//           <h5>Api2</h5>
//         </>
//       );
// }

// export default Api2
