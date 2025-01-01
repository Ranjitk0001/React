import React, { useEffect, useState } from "react";
import RouteNavbar from "../Routing/RouteNavbar";

const Api4 = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const mainData = await res.json();

    setData(mainData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <RouteNavbar />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((currentVal) => {
            return (
              <tr>
                <th scope="row">{currentVal.id}</th>
                <td>{currentVal.name}</td>
                <td>{currentVal.username}</td>
                <td>{currentVal.email}</td>
                <td>{currentVal.address.street},
                    {currentVal.address.suite},
                    {currentVal.address.city},
                    {currentVal.address.zipcode},

                    {currentVal.address.geo.lat},
                    {currentVal.address.geo.lng},
                    </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Api4;
