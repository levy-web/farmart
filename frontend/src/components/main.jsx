import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <>
    <div className="container">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/coder.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Animals for sale</h3>
          <p>Dairy cows for sale.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/goat.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Animals for sale</h3>
          <p>Dairy goat for sale.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/sheep.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Animals for sale </h3>
          <p>
            Wooly sheep for sale.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
      {/* <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/coder.jpg"
            alt="Card"
            height={1000}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container" style={{position:'absolute',top:0,left:0}}>
              <h5 className="card-title fs-1 text fw-bold" style={{color:'black'}}>Welcome to Farmat</h5>
              <p className="card-text fs-5 d-none d-sm-block " style={{color:'black'}}>
              Buy farm animals directly from farmers and support their livelihoods
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
