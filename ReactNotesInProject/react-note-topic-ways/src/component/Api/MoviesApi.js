import React from "react";
import MoviesData from "./MoviesData";
import RouteNavbar from "../Routing/RouteNavbar";


const MoviesApi = () => {
  return (
    <>
    <RouteNavbar/>
      
      <h1> Top Rated Movies</h1>
      <div className="contaier-fluid">
        <div className="row">
          {
          MoviesData.map((cval) => {
            return (
              <div className="card m-3"  style={{ width: '18rem' }}>
                <img src={cval.image} className="card-img-top rounded float-start" alt="Loading" />
                <div className="card-body">
                  <h5 className="card-title">{cval.name}</h5>
                  <p className="card-text">
                  {cval.rating}
                  </p>
                 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MoviesApi;
