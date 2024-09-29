import React from "react";
import Review from "../components/Review.jsx";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="m-4 md:m-8">
          <h2 className="text-2xl font-bold mb-4">DineDash</h2>
          <ul className="list-none mb-0">
            <li className="text-lg mb-2">About</li>
            <li className="text-lg mb-2">Careers</li>
            <li className="text-lg mb-2">Team</li>
            <li className="text-lg mb-2">Legal</li>
          </ul>
        </div>

        <div className="m-4 md:m-8">
          <h2 className="text-2xl font-bold mb-4">We deliver to :</h2>
          <ul className="list-none mb-0">
            <li className="text-lg mb-2">Mumbai</li>
            <li className="text-lg mb-2">Bangalore</li>
            <li className="text-lg mb-2">Delhi</li>
            <li className="text-lg mb-2">Hyderabad</li>
          </ul>
        </div>

        <div className="m-4 md:m-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <ul className="list-none mb-0">
            <li>
              <a
                href="https://www.linkedin.com/in/BronilKoli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-square1-128.png"
                  alt="LinkedIn"
                  width="40"
                  height="40"
                  className="mr-4"
                />
                <span className="ml-2">Bronil Koli</span>
              </a>
            </li>
            <li className="mt-4">
              <a
                href="https://www.linkedin.com/in/alton-fernandes-a9b6392b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-square1-128.png"
                  alt="LinkedIn"
                  width="40"
                  height="40"
                  className="mr-4"
                />
                <span className="ml-2">Alton Fernandes</span>
              </a>
            </li>
            <li className="mt-4">
              <a
                href="https://www.linkedin.com/in/ansley-rebello-183838244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-square1-128.png"
                  alt="LinkedIn"
                  width="40"
                  height="40"
                  className="mr-4"
                />
                <span className="ml-2">Ansley Rebello</span>
              </a>
            </li>
            <li className="mt-4">
              <a
                href="https://www.linkedin.com/in/glaxson-rebello-46ba81286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-square1-128.png"
                  alt="LinkedIn"
                  width="40"
                  height="40"
                  className="mr-4"
                />
                <span className="ml-2">Glaxson Rebello</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="m-4 md:m-8">
          <footer className="bg-gray-100 py-8 text-gray-900">
            <Review />
          </footer>
        </div>
      </div>
    </footer>
  );
};

export default Footer;