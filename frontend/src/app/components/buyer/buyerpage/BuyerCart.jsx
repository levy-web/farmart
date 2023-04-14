import React, { useState, useEffect } from 'react';

const BuyerCart = ({ cartItems, handleRemoveFromCart }) => {
const [totalPrice, setTotalPrice] = useState(0);

// Calculate total price of items in cart
const calculateTotalPrice = () => {
let totalPrice = 0;
if (cartItems) { // Check if cartItems is not undefined before iterating
cartItems.forEach((item) => {
totalPrice += item.price;
});
}
setTotalPrice(totalPrice);
};

// Handle checkout button click
const handleCheckout = () => {
// Code to redirect user to checkout page
};

// Render cart items
const renderCartItems = () => {
return cartItems.map((item) => (
<div key={item.id} className="card mb-3">
<div className="row no-gutters">
<div className="col-md-4">
<img src={item.image} className="card-img" alt={item.description} />
</div>
<div className="col-md-8">
<div className="card-body">
<h5 className="card-title">{item.description}</h5>
<p className="card-text">${item.price}</p>
<button
className="btn btn-danger btn-sm"
onClick={() => handleRemoveFromCart(item)}
>
X
</button>
</div>
</div>
</div>
</div>
));
};

// Render checkout button and total price
const renderCheckout = () => {
return (
<div className="mt-3">
<p>Total Price: ${totalPrice}</p>
<button className="btn btn-primary" onClick={handleCheckout}>
Checkout
</button>
</div>
);
};

// Calculate total price on mount and whenever cartItems changes
useEffect(() => {
calculateTotalPrice();
}, [cartItems]);

return (
<div>
{cartItems && cartItems.length > 0 ? (
<>
<h2>Cart Items</h2>
{renderCartItems()}
{renderCheckout()}
</>
) : (
<p>No items in cart</p>
)}
</div>
);
};

export default BuyerCart;