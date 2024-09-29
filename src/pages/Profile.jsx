import React from 'react';

function Profile() {
  return (
    <div className="h-screen flex justify-center bg-gray-100">
      <div className="max-w-md w-full lg:max-w-lg mx-auto p-4 lg:p-6 bg-white rounded shadow-md">
        <div className="flex justify-center mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">John Doe</h1>
        <p className="text-gray-600 mb-4">Software Engineer at ABC Company</p>
        <ul className="list-none mb-4">
          <li className="flex items-center mb-2">
            <i className="fas fa-envelope text-gray-600 mr-2" />
            <span>johndoe@example.com</span>
          </li>
          <li className="flex items-center mb-2">
            <i className="fas fa-phone text-gray-600 mr-2" />
            <span>(123) 456-7890</span>
          </li>
          <li className="flex items-center mb-2">
            <i className="fas fa-linkedin text-gray-600 mr-2" />
            <span>linkedin.com/in/johndoe</span>
          </li>
        </ul>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;


