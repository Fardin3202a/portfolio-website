import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Modal from "./Modal"; // Import the Modal component

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(true); // Track success/failure
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setIsModalOpen(true); // Open modal when form is submitted
    const formData = new FormData(event.target);

    // Example: Add your Web3Forms access_key and endpoint
    formData.append("access_key", "99dc0bb9-4252-410a-92ea-787d9ee8d800");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setIsSuccess(true); // Set success status
      setResult("Form Submitted Successfully");
    } else {
      setIsSuccess(false); // Set failure status
      setResult(data.message || "Submission failed. Please try again.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex xl:flex-row lg:flex-row flex-col w-screen xl:w-screen lg:w-screen z-50">
      <div className="left py-10 w-full xl:w-1/2 lg:w-1/2 h-screen flex justify-center items-center">
        <div className="content w-10/12 h-5/6 flex justify-center items-center flex-col gap-10">
          <div>
            <h1 className="text-5xl text-transparent bg-gradient-to-tl from-Secondary from-30% to-Primary bg-clip-text font-pacifico h-20">
              Get in Touch
            </h1>
            <p className=" font-pacifico font-thin text-text">
              Feel free to reach out anytime!
            </p>
          </div>
          <section className="address">
            <p className="text-text text-lg font-roboto">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:fardin3202a@gmail.com" className="ml-2 hover:underline">
                Email: fardin3202a@gmail.com
              </a>
            </p>
            <p className="text-text text-lg font-roboto">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+8801783444448" className="ml-2 hover:underline">
                Phone: +880 178344 4448
              </a>
            </p>
            <p className="text-text text-lg font-roboto">
              <FontAwesomeIcon icon={faGlobe} /> Social:
              <a href="#" className="text-gray-800 font-semibold font-poppins hover:underline ml-1">
                LinkedIn
              </a> |
              <a href="#" className="text-gray-800 font-semibold font-poppins hover:underline ml-1">
                GitHub
              </a> |
              <a href="#" className="text-gray-800 font-semibold font-poppins hover:underline ml-1">
                Facebook
              </a>
            </p>
            <div className="Icons w-full flex justify-start items-center flex-row gap-5 text-4xl text-gray-800 mt-12">
              <FontAwesomeIcon className="cursor-pointer" icon={faLinkedin} />
              <FontAwesomeIcon className="cursor-pointer" icon={faGithub} />
              <FontAwesomeIcon className="cursor-pointer" icon={faFacebook} />
            </div>
          </section>
        </div>
      </div>
      <div className="right py-10 w-full lg:w-1/2 xl:w-1/2 h-screen bg-gradient-to-tl from-Secondary to-Primary flex justify-center items-center -z-10">
        <form
          onSubmit={onSubmit}
          className="content w-10/12 h-5/6 flex justify-start items-center flex-col"
        >
          <h1 className="m-5 text-4xl font-pacifico text-white">Send a message</h1>
          <div className="flex flex-col gap-6 w-11/12 mx-auto">
            <input
              required
              type="text"
              name="name"
              className="placeholder:text-white focus:bg-transparent focus:border-b-2 focus:outline-none border-b-2 border-white bg-transparent p-2 text-xl text-white font-poppins"
              placeholder="  Name"
            />
            <input
              required
              type="email"
              name="email"
              className="placeholder:text-white focus:bg-transparent focus:border-b-2 focus:outline-none border-b-2 border-white bg-transparent p-2 text-xl text-white font-poppins"
              placeholder="  Email"
            />
            <textarea
              required
              name="message"
              rows={8}
              placeholder="  Message..."
              spellCheck={false}
              className="placeholder:text-white/90 placeholder:font-poppins text-xl text-white font-poppins bg-white/20 backdrop-blur-3xl w-full p-4 rounded-xl focus:border-none outline-none"
            />
            <button
              className="rounded-full bg-white w-32 h-12 mt-5 font-pacifico text-2xl text-gray-800"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Modal for Success/Failure */}
      <Modal
        isOpen={isModalOpen}
        message={result}
        isSuccess={isSuccess}
        onClose={closeModal}
      />
    </div>
  );
};

export default Contact;
