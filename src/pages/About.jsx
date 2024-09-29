import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-4xl font-black mb-8 text-center">About Us</h1>

      <p className="text-lg leading-relaxed mb-6 text-center">
        Welcome to <span className="font-semibold">DineDash</span>, where food meets convenience!
      </p>

      <div className="space-y-6 text-justify">
        <p className="text-lg leading-relaxed">
          At <span className="font-semibold">DineDash</span>, we believe that good food brings people together. We are passionate about delivering delicious meals from your favorite local restaurants straight to your doorstep. Whether you’re craving a quick bite or planning a family feast, we’ve got you covered with a variety of cuisines to satisfy every palate.
        </p>

        <h2 className="text-2xl font-bold mt-8">Why Choose Us?</h2>

        <ul className="list-disc list-inside space-y-4 mt-4">
          <li>
            <strong>Wide Range of Restaurants:</strong> From street food favorites to gourmet experiences, we partner with top-rated restaurants to offer a vast selection of dishes that cater to every taste.
          </li>
          <li>
            <strong>Fast and Reliable Delivery:</strong> We understand the importance of timely deliveries. Our fleet of experienced delivery partners ensures your food arrives hot and fresh, right when you need it.
          </li>
          <li>
            <strong>Easy-to-Use Platform:</strong> With a user-friendly app and website, placing your order is just a few clicks away. Track your order in real-time and enjoy secure, hassle-free payments.
          </li>
          <li>
            <strong>Exclusive Deals & Offers:</strong> We work closely with our restaurant partners to bring you exciting discounts and special offers that make every meal more affordable.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Our Mission</h2>

        <p className="text-lg leading-relaxed">
          Our mission is simple: to make quality food accessible to everyone, anytime, anywhere. We strive to offer an unmatched dining experience from the moment you browse through our platform to the final bite of your meal.
        </p>

        <h2 className="text-2xl font-bold mt-8">Join Us on the Journey</h2>

        <p className="text-lg leading-relaxed">
          Whether you’re a foodie or just looking for something quick to eat, <span className="font-semibold">DineDash</span> is here to make your food journey enjoyable. We’re constantly expanding our network of restaurant partners and enhancing our services to bring you the best food delivery experience.
        </p>

        <p className="text-lg leading-relaxed text-center font-semibold mt-8">
          Thank you for choosing <span className="font-semibold">DineDash</span>—where every meal is just a click away!
        </p>
      </div>
    </div>
  );
};

export default About;
