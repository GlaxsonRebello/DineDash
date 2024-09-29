import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 10.0 },
    { id: 2, name: "Item 2", price: 15.0 },
    { id: 3, name: "Item 3", price: 25.0 },
  ]);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const totalAmount = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment and form submission logic here
    alert(`Processing payment of $${totalAmount} for ${name}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Cart Summary */}
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-bold mt-4">
          <span>Total:</span>
          <span>${totalAmount}</span>
        </div>
      </div>

      {/* User Details Form */}
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">User Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>

          {/* Payment Method */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>

          <Link
              to="/body"
              className="p-2 md:px-4 group hover:bg-gray-50 rounded-md flex items-center gap-2"
            ><button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Complete Checkout
          </button>
            </Link>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
