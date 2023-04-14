import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

// import BuyerCart from './BuyerCart';

const BuyerPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    fetch("https://matomugo60.github.io/db/db.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const searchTermMatch =
        item.type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.breed?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.age && item.age.toString().includes(searchTerm)) ||
        (item.weight && item.weight.toString().includes(searchTerm)) ||
        (item.price && item.price.toString().includes(searchTerm));
      const filterValueMatch =
        filterValue === '' ||
        item[selectedFilter]?.toString().toLowerCase().includes(filterValue.toLowerCase());
      return searchTermMatch && filterValueMatch;
    });
    setFilteredData(filtered);
  }, [data, searchTerm, selectedFilter, filterValue]);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectedFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleAddToCart = (item) => {
    // code to send data to cart component
   
  };

  return (
    <div>
      <div className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search by type, breed, age, weight or price"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      <div className="mb-3">
        <Form.Control
          as="select"
          value={selectedFilter}
          onChange={handleSelectedFilterChange}
        >
          <option value="">Filter by...</option>
          <option value="breed">Breed</option>
          <option value="age">Age</option>
          <option value="weight">Weight</option>
          <option value="price">Price</option>
        </Form.Control>
        {selectedFilter && (
          <Form.Control
            className="mt-3"
            type="text"
            placeholder={`Enter ${selectedFilter}...`}
            value={filterValue}
            onChange={handleFilterValueChange}
          />
        )}
      </div>
      {filteredData.map((item) => (
        <Card key={item.id} className="mb-3 shadow">
          <div className="row">
            <div className="col-md-6">
              <Card.Img variant="top" src={item.image} />
            </div>
            <div className="col-md-6 p-3">
              <Card.Title>{item.description}</Card.Title>
              <Card.Text>Type: {item.type}</Card.Text>
              <Card.Text>Breed: {item.breed}</Card.Text>
              <Card.Text>Age: {item.age}</Card.Text>
              <Card.Text>Weight: {item.weight} kg</Card.Text>
              <Card.Text>Price: ${item.price}</Card.Text>
              <Button variant="primary" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};


export default BuyerPage;
