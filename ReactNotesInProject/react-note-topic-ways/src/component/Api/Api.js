import React, { useEffect } from "react";
import RouteNavbar from "../Routing/RouteNavbar";

const Api = () => {

  const getData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const mainData = await res.json();
      console.log("Fetched data:", mainData);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <RouteNavbar />
      <h5>Api</h5>
    </>
  );
};

export default Api;
