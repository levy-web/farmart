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
          src="https://images.unsplash.com/photo-1614183653806-b4b9daed1954?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhcm0lMjBhbmltYWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Animals for sale</h3>
          <p>Woolly Sheep for Sale.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFybSUyMGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Animals for sale</h3>
          <p>Piglet for sale.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1516704135885-dc4c68a189e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhcm0lMjBhbmltYWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Animals for sale </h3>
          <p>
            Horses for sale.
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
            <div className="container mt-3" style={{position:'absolute',top:0,left:0}}>
            <h5 className="card-title fs-1 text fw-bold" style={{ color: 'black', textAlign: 'center', margin: 3 }}>Welcome to Farmat</h5>
                <p className="card-text fs-5 d-none d-sm-block " style={{ color: 'black', textAlign: 'center', margin: 3 }}>
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
