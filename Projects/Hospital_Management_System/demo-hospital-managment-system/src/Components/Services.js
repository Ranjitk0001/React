import React from "react";
import "./Style/Services.css";

const Services = () => {

 const ServiceData=[
  { 
    "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75", 
    "name": "Ranjit"
  },
  { 
    "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75", 
    "name": "2"
  },
  { 
    "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75", 
    "name": "3"
  },
  { 
    "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75", 
    "name": "4"
  },
  { 
    "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75", 
    "name": "5"
  },
  { 
    "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75", 
    "name": "6"
  },
  { 
    "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75", 
    "name": "7"
  },
  { 
    "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75", 
    "name": "8"
  },
  { 
    "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75", 
    "name": "9"
  },
  { 
    "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75", 
    "name": "10"
  },
 ]
  return (
    <>
      <div className="container-fluid p-5">
        {/* Carousel */}
        <div className="carousel-container ">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fcommonimages%2FMulti-specialities-banner.jpg&w=2048&q=75"
                  className="d-block w-100 rounded-4"
                  alt="Multi-specialities Banner"
                />
              </div>
              {/* Add more carousel items here */}
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="row rounded-4">
          <div className="col">
            <div className="m-4">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="bg-warning rounded-4">
          <div className="row d-flex flex-wrap justify-content-around g-3">
           
{
  ServiceData.map((currentVal) => {
    return(
    <div className="col">
    <div className="card rounded-4 bg-warning" style={{ width: "18rem", border: "none" }}>
      <img
        src={currentVal.image}
        className="card-img-top rounded-4"
        alt="Accident & Emergency"
      />
      <div className="card-body">
        <h3 className="card-title">{currentVal.name}</h3>
      </div>
    </div>
  </div>
    );
  })
}


            {/* <div className="col">
              <div className="card rounded-4 bg-warning" style={{ width: "18rem", border: "none" }}>
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75"
                  className="card-img-top rounded-4"
                  alt="Anesthesiology"
                />
                <div className="card-body">
                  <h3 className="card-title">Anesthesiology</h3>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card rounded-4 bg-warning" style={{ width: "18rem", border: "none" }}>
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAccident-%26-Emergency.jpg&w=1080&q=75"
                  className="card-img-top rounded-4"
                  alt="Accident & Emergency"
                />
                <div className="card-body">
                  <h3 className="card-title">Cardiac Sciences</h3>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-4 bg-warning" style={{ width: "18rem", border: "none" }}>
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75"
                  className="card-img-top rounded-4"
                  alt="Anesthesiology"
                />
                <div className="card-body">
                  <h3 className="card-title">Anesthesiology</h3>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card rounded-4 bg-warning" style={{ width: "18rem", border: "none" }}>
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAccident-%26-Emergency.jpg&w=1080&q=75"
                  className="card-img-top rounded-4"
                  alt="Accident & Emergency"
                />
                <div className="card-body">
                  <h3 className="card-title">Cardiac Sciences</h3>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-4 bg-warning" style={{ width: "18rem", border: "none" }}>
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75"
                  className="card-img-top rounded-4"
                  alt="Anesthesiology"
                />
                <div className="card-body">
                  <h3 className="card-title">Anesthesiology</h3>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card rounded-4 bg-warning" style={{ width: "18rem", border: "none" }}>
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAccident-%26-Emergency.jpg&w=1080&q=75"
                  className="card-img-top rounded-4"
                  alt="Accident & Emergency"
                />
                <div className="card-body">
                  <h3 className="card-title">Cardiac Sciences</h3>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-4 bg-warning" style={{ width: "18rem", border: "none" }}>
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75"
                  className="card-img-top rounded-4"
                  alt="Anesthesiology"
                />
                <div className="card-body">
                  <h3 className="card-title">Anesthesiology</h3>
                </div>
              </div>
            </div> */}
            {/* Add other cards here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
