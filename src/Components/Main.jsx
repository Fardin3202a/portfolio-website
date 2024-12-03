import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio-section').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <div className=' w-screen h-screen flex justify-center items-center flex-col relative'>
        <img className=' opacity-90 -z-20 w-full
         lg:w-3/4 xl:w-3/4 absolute ' src="./src/assets/MainBg.png" alt="" />
        <img
          className='-z-10 w-full sm:w-full lg:w-[960px] xl:w-[960px] absolute '
          src="./src/assets/Vector.png"
          alt="Responsive Image"
        />
        <div className=' absolute w-full h-full flex justify-center items-center flex-col'>
          <h1 className='mt-24 lg:mt-0 xl:mt-0 font-poppins text-4xl font-bold lg:text-7xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-tl from-Secondary to-Primary'>Fardin Ahmed</h1>
          <h2 className=' font-poppins text-center w-10/12 font-bold text-2xl leading-tight lg:text-5xl xl:text-5xl text-gray-800'>Turning ideas into impactful digital experiences</h2>
          <p className=' lg:mt-4 xl:mt-4 w-11/12 xl:w-5/12 lg:w-5/12 lg:my-2 xl:my-2 font-roboto text-text text-xs lg:text-sm xl:text-sm text-center leading-tight my-1' >I'm here to help you build modern, responsive, and user-friendly web solutions using HTML, CSS, JavaScript, and React. With a strong focus on design and functionality, I use tools like Tailwind CSS to bring your ideas to life.</p>
          <Button handlClick={scrollToPortfolio} extraStyle=' font-poppins w-36 h-11 bg-gradient-to-tl from-Secondary to-Primary text-white flex flex-row gap-2 justify-center items-center text-xs mt-5 xl:w-56 xl:h-14 xl:gap-3 xl:text-lg'>Explore Projects <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Button>
        </div>
      </div>
    </div>
  )
}
export default Main
