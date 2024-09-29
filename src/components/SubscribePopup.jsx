import React from 'react';

const SubscribePopup = ({ onHide }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-lg font-bold mb-2">Subscribe to our newsletter</h2>
        <p className="text-sm mb-4">Stay up to date with our latest news and updates.</p>
        <form>
          <input type="email" placeholder="Enter your email address" className="w-full p-2 mb-2 border border-gray-400 rounded-lg" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Subscribe</button>
        </form>
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={onHide}>Close</button>
      </div>
    </div>
  );
};

export default SubscribePopup;