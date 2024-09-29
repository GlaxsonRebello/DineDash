const Contact = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-black text-gray-800">Contact Us</h1>
      <p className="text-xl font-semibold mt-4 mb-4 text-gray-600">
        We'd love to hear from you!
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-md mt-8 bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
        >
          Send Message
        </button>
      </form>

      {/* Team Members Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800">Connect with Us</h2>
        <div className="flex flex-wrap justify-center mt-4">
          {[
            {
              name: "Bronil Koli",
              url: "https://www.linkedin.com/in/BronilKoli",
            },
            {
              name: "Alton Fernandes",
              url: "https://www.linkedin.com/in/alton-fernandes-a9b6392b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            },
            {
              name: "Ansley Rebello",
              url: "https://www.linkedin.com/in/ansley-rebello-183838244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            },
            {
              name: "Glaxson Rebello",
              url: "https://www.linkedin.com/in/glaxson-rebello-46ba81286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            },
          ].map((member, index) => (
            <a
              key={index}
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center m-4 transition-transform transform hover:scale-105"
            >
              <img
                className="image-center"
                src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png" // LinkedIn logo URL
                alt="LinkedIn"
                width="40"
                height="40"
              />
              <span className="mt-2 text-gray-700 text-sm font-bold">
                {member.name}
              </span>{" "}
              {/* Changed font-weight to bold */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
