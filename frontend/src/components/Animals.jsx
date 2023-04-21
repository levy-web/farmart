import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Animals = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();
  

  const addAnimal = (animal) => {
    dispatch(addCart(animal))
  }

  useEffect(() => {
    const getAnimals = async () => {
      setLoading(true);
      const response = await fetch("/animals",{
        method:"GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("TOKEN")}`
        }
      })
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getAnimals();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterAnimal = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }
  const ShowAnimals = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterAnimal("men's clothing")}>Cows</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterAnimal("women's clothing")}>
            Horses
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterAnimal("jewelery")}>Goats</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterAnimal("electronics")}>Sheep</button>
        </div>

        {filter.map((animal) => {
          return (
            <div id={animal.id} key={animal.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={animal.id}>
                <img
                  className="card-img-top p-3"
                  src={animal.image_url}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {animal.name.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {animal.breed.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {animal.price}</li>
                </ul>
                <div className="card-body">
                  <Link to={"/Animal/" + animal.name} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => addAnimal(animal)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Our Healthy Animals</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowAnimals />}
        </div>
      </div>
    </>
  );
};

export default Animals;
