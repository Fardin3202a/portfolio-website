import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioData = [
    {
      id: 1,
      img: "./src/assets/Project1.png", // Replace with your image URL
      fullImg: './src/assets/PROJECT1FULL.png',
      heading: "Personal Portfolio Website",
      shortPara:
        "A modern and responsive personal portfolio website to showcase my skills and projects.",
      link: "Fardin3202a/github.io/portfolio", // Replace with actual project link
    },
    {
      id: 2,
      img: null,
      heading: "No Project",
      shortPara: "No project available for this slot.",
      link: null,
    },
    {
      id: 3,
      img: null,
      heading: "No Project",
      shortPara: "No project available for this slot.",
      link: null,
    },
  ];


  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div
      id="portfolio-section"
      className=" overflow-hidden lg:h-screen xl:h-screen w-screen bg-MainSecondary relative flex-col flex justify-center items-center"
    >
      <img
        className="absolute w-[1213px] h-[767px] blur-[200px]"
        src="./src/assets/SecondaryBg.png"
        alt=""
      />
      <div className=" w-screen h-[0.0625rem] bg-white opacity-60 absolute top-72"></div>
      <div className=" w-10/12 z-50 h-72">
        <div className=" w-full h-36 flex gap-5 flex-col">
          <h1 className=" mt-10 text-white text-5xl font-poppins font-semibold h-16">
            Projects below
          </h1>
          <p className=" text-xl text-white opacity-80">
            Showcasing the best of my work, combining creativity with
            cutting-edge web technologies.
          </p>
          <div className=" absolute left-0 top-60 text-xl w-full h-8 flex justify-center items-center text-white font-poppins">
            <ul className=" flex flex-row gap-6">
              <li>
                <a className="cursor-default">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="py-16 Carts w-full h-3/4 mt-1 flex-col xl:flex-row lg:flex-row flex justify-center items-center gap-5 relative">
          {portfolioData.map((Data) => (
            <div
              key={Data.id}
              className="w-[22rem] h-96 bg-white/10 rounded-3xl relative backdrop-blur-xl flex justify-between flex-col"
            >
              {Data.img ? (
                <img
                  className="w-full h-44 rounded-t-xl cursor-pointer"
                  src={Data.img}
                  alt={Data.heading}
                />
              ) : (
                <div className="w-full h-44 bg-gray-700 rounded-t-xl flex justify-center items-center">
                  <p className="text-white opacity-80">No Image Available</p>
                </div>
              )}
              <div>
                <h1 className=" absolute top-40 text-2xl text-white font-poppins font-semibold m-5">
                  {Data.heading}
                </h1>
                <p className=" absolute top-64 text-sm font-roboto text-white opacity-80 ml-5">
                  {Data.shortPara}
                </p>
                {Data.link ? (
                  <Button
                    extraStyle={
                      " absolute top-72 font-poppins m-5 bg-gray-800 w-44 h-12 text-white"
                    }
                    handlClick={() => handleOpenModal(Data)}
                  >
                    View Project{" "}
                    <FontAwesomeIcon
                      className="ml-2 text-white"
                      icon={faArrowUpRightFromSquare}
                    />
                  </Button>
                ) : (
                  <div className=" absolute top-72 rounded-full font-poppins m-5 bg-gray-800 w-44 h-12 text-white flex justify-center items-center">
                    No Project
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-11/12 bg-MainSecondary/20 backdrop-blur-xl py-10 px-5 rounded-lg mt-12">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={handleCloseModal}
            >
              ✖
            </button>
            <div className="h-40 lg:h-[42rem] overflow-y-auto scrollbar-hide rounded-lg mb-5"> {/* Set a fixed height */}
              <img
                src={selectedProject.fullImg}
                alt={selectedProject.heading}
                className="w-full"
              />
            </div>
            <h2 className="text-2xl font-poppins text-white mb-3 font-semibold">
              {selectedProject.heading}
            </h2>
            <p className="text-white text-sm opacity-80 mb-3">
              {selectedProject.shortPara}
            </p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit Project
            </a>
          </div>
        </div>

      )}
    </div>
  );
};

export default Portfolio;
