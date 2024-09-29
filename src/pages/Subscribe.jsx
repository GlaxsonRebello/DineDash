import React from 'react';

const Subscribe = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded shadow-md">
        <h2 className="text-3xl font-bold mb-4">Choose Your Subscription Plan</h2>
        <p className="text-gray-600 mb-6">Get access to exclusive discounts, free delivery, and more!</p>
        <div className="flex flex-col md:flex-row justify-center mb-6">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-white rounded shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Weekly Plan</h3>
              <p className="text-gray-600 mb-4">$4.99/week</p>
              <ul className="list-none mb-4">
                <li className="text-gray-600 mb-2">Free delivery on orders over $20</li>
                <li className="text-gray-600 mb-2">10% off all orders</li>
              </ul>
              <button
                type="button"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-white rounded shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Monthly Plan</h3>
              <p className="text-gray-600 mb-4">$19.99/month</p>
              <ul className="list-none mb-4">
                <li className="text-gray-600 mb-2">Free delivery on all orders</li>
                <li className="text-gray-600 mb-2">20% off all orders</li>
                <li className="text-gray-600 mb-2">Priority customer support</li>
              </ul>
              <button
                type="button"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-white rounded shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Yearly Plan</h3>
              <p className="text-gray-600 mb-4">$199.99/year</p>
              <ul className="list-none mb-4">
                <li className="text-gray-600 mb-2">Free delivery on all orders</li>
                <li className="text-gray-600 mb-2">30% off all orders</li>
                <li className="text-gray-600 mb-2">Priority customer support</li>
                <li className="text-gray-600 mb-2">Free dessert on every order</li>
              </ul>
              <button
                type="button"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;