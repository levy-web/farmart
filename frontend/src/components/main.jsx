import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/coder.jpg"
            alt="Card"
            height={1000}
          />
      <div className="card-img-overlay d-flex align-items-start">
  <div className="container mt-1">
    <h5 className="card-title fs-1 text-center fw-bold" style={{ color: 'black', fontWeight: 'bold', margin: '3rem 0 1rem' }}>
      Welcome to Farmat
    </h5>
    <p className="card-text fs-5 text-center" style={{ color: 'black', fontWeight: 'bold', margin: '1rem 0 3rem' }}>
      Buy farm animals directly from farmers and support their livelihoods
    </p>
  </div>
</div>

        </div>
      </div>
    </>
  );
};

export default Home;
