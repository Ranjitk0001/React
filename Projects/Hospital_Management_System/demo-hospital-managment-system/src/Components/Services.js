import React from "react";
import "./Style/Services.css";

const Services = () => {

  const ServiceData = [
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAccident-%26-Emergency.jpg&w=640&q=75",
      "name": "Accidental &Emergency"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAnaesthesiology.jpg&w=640&q=75",
      "name": "Anesthesiology"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FAndrology-and-Sexual-Medicine.jpg&w=640&q=75",
      "name": "Andrology & Sexual Medicine"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FBariatric-%26-Metabolic-Surgery.jpg&w=640&q=75",
      "name": "Bariatic & Metabolic"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FCardiac-Sciences.jpg&w=640&q=75",
      "name": "Catdiac Sciences"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FClinical-Haematology.jpg&w=640&q=75",
      "name": "Hematology"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FCritical-Care-Unit.jpg&w=640&q=75",
      "name": " Care Unit"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FDentistry.jpg&w=640&q=75",
      "name": "Dentistry"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FDermatology-%26-Cosmetology.jpg&w=640&q=75",
      "name": "Dermatology & Cosmetology"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FDietetics-%26-Nutrition-(Lifestyle).jpg&w=640&q=75",
      "name": "Dietetics & Nutrition (Lifestyle)"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FEndocrinology-%26-Diabetology.jpg&w=640&q=75",
      "name": "Endocrinology & diabetology"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FFetal-%26-Genetic-Medicine.jpg&w=640&q=75",
      "name": "Fetal & Genetic"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FGastroscience.jpg&w=640&q=75",
      "name": "Gastroscience"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FGeneral-Surgery.jpg&w=640&q=75",
      "name": "General Surgery"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FGI-SURGERY.jpg&w=640&q=75",
      "name": "GI Surgery"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FHepatology-and-Liver-transplantation.jpg&w=640&q=75",
      "name": "Hepatology and Liver transplatation"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FInterventional-Radiology.jpg&w=640&q=75",
      "name": "Interventional Radiology"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FInternal-Medicine.jpg&w=640&q=75",
      "name": "Internal Medicine"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FInfectious-Disease.jpg&w=640&q=75",
      "name": "Infectious Disease"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FReproductive-Medicine.jpg&w=640&q=75",
      "name": "IVF & Reproductive Medicine"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FMedical-Oncology.jpg&w=640&q=75",
      "name": "Medical Oncology"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FNephrology-%26-Renal-transplant.jpg&w=640&q=75",
      "name": "Nephrology & Renal transplant"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FNeuroscience.jpg&w=640&q=75",
      "name": "Neuroscience"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FNuclear-Medicine.jpg&w=640&q=75",
      "name": "Nuclear Medicine"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FObs-%26-Gynae.jpg&w=640&q=75",
      "name": "Obstetrics & Gynae"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FOpthamology.jpg&w=640&q=75",
      "name": "Ophthalmology"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FOral-and-Maxillofacial.jpg&w=640&q=75",
      "name": "Oral & Maxillafacial"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FOrgan-Transplant.jpg&w=640&q=75",
      "name": "Organ Transplant"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FOrthopaedic.jpg&w=640&q=75",
      "name": "Orthopaedic"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FOtolaryngology-(ENT).jpg&w=640&q=75",
      "name": "ENT (Ear ,Nose ,Throat)"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FProctologynew.jpg&w=640&q=75",
      "name": "Proctology"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FPhysiotherapy-%26-Rehabilitation.jpg&w=640&q=75",
      "name": "Physiotherapy & Rehabilitation"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FPlastic-and-Reconstructive-Surgery.jpg&w=640&q=75",
      "name": "Plastic & Reconstructive Surgery"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FPsychiatry.jpg&w=640&q=75",
      "name": "Psychiatry"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FPaediatrics.jpg&w=640&q=75",
      "name": "Paediatrics"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FPulmonory-Medicine.jpg&w=640&q=75",
      "name": "Pulmonary Medicine"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FPain-Management.jpg&w=640&q=75",
      "name": "Pain Management"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FRobotic-Assisted-Surgery.jpg&w=640&q=75",
      "name": "Robotic Assisted Surgery"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FRadiation-Oncology.jpg&w=640&q=75",
      "name": "Radiation Oncology"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FRheumatology-%26-Immunology.jpg&w=640&q=75",
      "name": "Rheumatology & Immunology"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FSurgical-Oncology.jpg&w=640&q=75",
      "name": "Surgical Oncology"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FTransfusion-Medicine.jpg&w=640&q=75",
      "name": "Transfusion Medicine"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FUrology.jpg&w=640&q=75",
      "name": "Urology"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FVascular-Surgery.jpg&w=640&q=75",
      "name": "Vascular Surgery"
    },
    {
      "image": "https://adityabirlahospital.com/_next/image?url=%2Fnewspecilitymainimage%2FWellness.jpg&w=640&q=75",
      "name": "Wellness"
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
          <div className="row d-flex flex-wrap justify-content-between p-2">

            {
              ServiceData.map((currentVal) => {
                return (
                  <div className="col card-section m-3" >
                  {/* <div className="col card-section" style={{ width: "18rem",border: "20px solid red"}}> */}
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
