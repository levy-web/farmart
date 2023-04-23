import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

const Animal = () => {
  const { animalName } = useParams();
  const [animal, setProduct] = useState([]);
  const [similarAnimals, setSimilarAnimals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addAnimal = (animal) => {
    dispatch(addCart(animal));
  };

  useEffect(() => {
    const getAnimal = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://farmart-api.onrender.com/animals/${animalName}`,{
        method:"GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("TOKEN")}`
        }
      });
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(`https://farmart-api.onrender.com/animals`,{
        method:"GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("TOKEN")}`
        }
      });
      const data2 = await response2.json();
      setSimilarAnimals(data2.data);
      setLoading2(false);
    };
    getAnimal();
  }, [animalName]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowAnimal = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={animal.image_url}
                alt={animal.name}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{animal.animal_type}</h4>
              <h1 className="display-5">{animal.name}</h1>
              <p className="lead">
                {animal.rating && animal.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">${animal.price}</h3>
              <p className="lead">{animal.breed}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addAnimal(animal)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarAnimal = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarAnimals.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image_url}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.name.substring(0, 15)}...
                    </h5>
                  </div>
                  <div className="card-body">
                    <Link
                      to={"/Animal/" + item.name}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => addAnimal(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowAnimal />}</div>
        <div className="row my-5 py-5">
          <div className="container">
          <h2 className="">Other Healthy Animals</h2>
            <Marquee
              style={{ overflow: "hidden"}}
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              {loading2 ? <Loading2 /> : <ShowSimilarAnimal />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Animal;
