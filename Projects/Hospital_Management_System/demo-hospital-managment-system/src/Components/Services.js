import React from "react";
import "./Style/Services.css";
const Services = () => {
  return (
    <>
      <div className="container-fluid p-5 ">
        {/* Search Box */}

        <div className="row">
          <div className="col">
            <div className="mb-4">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Different card */}
        <div className="bg-warning rounded-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            <div className="col">
              <div
                className="card rounded-4   bg-warning"
                style={{ width: "18rem", border: "none" }}
              >
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAccident-%26-Emergency.jpg&w=1080&q=75"
                  className="card-img-top rounded-4"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Cardiac Sciences</h3>
                  {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card rounded-4   bg-warning"
                style={{ width: "18rem", border: "none" }}
              >
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=1080&q=75"
                  className="card-img-top rounded-4"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Anesthesilogy</h3>
                  {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card rounded-4   bg-warning"
                style={{ width: "18rem", border: "none" }}
              >
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAndrology-and-Sexual-Medicine.jpg&w=1080&q=75"
                  className="card-img-top rounded-4"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Andrology & Sexual Medicine</h3>
                  {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card rounded-4   bg-warning"
                style={{ width: "18rem", border: "none" }}
              >
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FBariatric-%26-Metabolic-Surgery.jpg&w=1080&q=75"
                  className="card-img-top rounded-4"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Bariatric & Metabolic Surgery</h3>
                  {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card rounded-4   bg-warning"
                style={{ width: "18rem", border: "none" }}
              >
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FCardiac-Sciences.jpg&w=1080&q=75"
                  className="card-img-top rounded-4"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Cardiac Sciences</h3>
                  {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card rounded-4   bg-warning"
                style={{ width: "18rem", border: "none" }}
              >
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FDietetics-%26-Nutrition-(Lifestyle).jpg&w=1080&q=75"
                  className="card-img-top rounded-4"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Hematology</h3>
                  {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card rounded-4   bg-warning"
                style={{ width: "18rem", border: "none" }}
              >
                <img
                  src="https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FCritical-Care-Unit.jpg&w=640&q=75"
                  className="card-img-top rounded-4"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Critical Care Unit</h3>
                  {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
