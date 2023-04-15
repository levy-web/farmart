import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Welcome to Farmart, the e-commerce application that connects farmers directly with buyers, eliminating the need for middlemen and ensuring that farmers receive the full value of their products.

      As a farmer, you can easily create an account on our platform, add your farm animals for sale, update and edit them, and confirm or reject orders as they come in. We believe in putting the power back in your hands and giving you control over your business.

      As a buyer, you can browse through all the listed animals, search for animals by type and breed, filter them by breed and age, add them to your cart, and checkout securely with our payment system. Our platform makes it easy for you to support local farmers and access high-quality farm products.

      We take pride in the technical aspects of our platform, using Ruby on Rails as our backend and PostgreSQL as our database to ensure a smooth and secure experience. Our wireframes have been designed with mobile-friendliness in mind, making it easy to use our platform on any device. We also use Jest and Minitests as our testing framework to ensure that our platform meets the highest standards of quality.

      Join us in our mission to eradicate middlemen and empower farmers by signing up for Farmart today!
        </p>

        <h2 className="text-center py-4">Available Animals</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center"> cows</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Horses</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Goats</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Sheep</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage