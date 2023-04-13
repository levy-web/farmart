import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";

const BuyerPage = (props) => {
  const [searchText, setSearchText] = useState("");
  const [filterBreed, setFilterBreed] = useState("");
  const [filterAge, setFilterAge] = useState("");

  const { data, addToCart } = props;

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleBreedFilter = (e) => {
    setFilterBreed(e.target.value);
  };

  const handleAgeFilter = (e) => {
    setFilterAge(e.target.value);
  };

  const handleAddToCart = (id) => {
    const itemToAdd = data.filter((item) => item.id === id)[0];
    addToCart(itemToAdd);
  };

  const filteredData = data.filter(
    (item) =>
      item.breed.toLowerCase().includes(filterBreed.toLowerCase()) &&
      item.age.toString().includes(filterAge)
  );

  const searchedData = filteredData.filter(
    (item) =>
      item.type.toLowerCase().includes(searchText.toLowerCase()) ||
      item.breed.toLowerCase().includes(searchText.toLowerCase()) ||
      item.weight.toString().includes(searchText.toLowerCase()) ||
      item.price.toString().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        {searchedData.map((item) => (
          <div className="col-md-6 mb-3" key={item.id}>
            <div className="card shadow">
              <div className="card-body d-flex">
                <div className="mr-3">
                  <img
                    src={item.imageUrl}
                    alt={item.breed}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <h5 className="card-title">{item.type}</h5>
                  <p className="card-text">{item.breed} - {item.age} months old</p>
                <p className="card-text">{item.weight} kg</p>
                <p className="card-text">${item.price}</p>
                <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(item.id)}
                >
                Add to Cart
                </button>
                </div>
                </div>
                </div>
                </div>
                ))}
                </div>
                <div className="row mt-3">
                <div className="col-md-4">
                <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchText}
                        onChange={handleSearch}
                    />
                </div>
                <div className="col-md-4">
                <input
                        type="text"
                        className="form-control"
                        placeholder="Filter by Breed"
                        value={filterBreed}
                        onChange={handleBreedFilter}
                    />
                </div>
                <div className="col-md-4">
                <input
                        type="text"
                        className="form-control"
                        placeholder="Filter by Age"
                        value={filterAge}
                        onChange={handleAgeFilter}
                    />
                </div>
                </div>
                </div>
                );
                };

                const mapStateToProps = (state) => {
                return {
                data: state.data,
                };
                };

                const mapDispatchToProps = (dispatch) => {
                return {
                addToCart: (item) => {
                dispatch(addToCart(item));
                },
                };
                };

                export default connect(mapStateToProps, mapDispatchToProps)(BuyerPage);
                                
