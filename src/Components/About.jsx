import React from 'react';
import Button from './Button';
import ProgressBar from './ProgressBar';

const About = () => {
  return (
    <div
      id="about-section"
      className="h-auto lg:h-screen xl:h-screen flex flex-col lg:flex-row w-full relative gap-5"
    >
      {/* Left Section */}
      <div className="lg:w-1/2 w-full h-full flex justify-center items-center relative overflow-hidden">
        {/* Background Images */}
        <img
          className="absolute lg:w-3/5 w-4/5 animate-spin-slow opacity-10"
          src="./src/assets/AboutBg.png"
          alt="Background"
        />
        <img
          className="absolute lg:w-2/5 w-3/5 opacity-20"
          src="./src/assets/Vector.png"
          alt="Vector"
        />
        {/* Content Box */}
        <div className="z-10 lg:w-3/5 w-11/12 bg-white/80 backdrop-blur-lg border-2 border-dashed border-lightText rounded-3xl flex flex-col justify-center items-start p-6 lg:p-10">
          <h1 className="text-2xl lg:text-3xl font-bold text-Primary mb-4">
            About me
          </h1>
          <p className="text-sm lg:text-base text-text mb-6">
            Hi there! 👋 I’m Fardin, a passionate web developer specializing in
            HTML, CSS, JavaScript, React, and Tailwind CSS. As a college student
            with a keen interest in technology, I love bringing ideas to life
            through clean, user-friendly, and responsive designs.
          </p>
          <Button extraStyle="font-poppins bg-gray-800 text-white w-32 h-10">
            <a
              href="mailto:fardin3202amailto:fardin@gmail.com?subject=Work%20Opportunity&body=Hello%20Fardin"
            >
              Hire me
            </a>
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full h-full flex justify-center items-center relative">
        <ProgressBar />
      </div>
    </div>
  );
};

export default About;
