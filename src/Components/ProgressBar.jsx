import React from 'react';

const tools = [
  { name: 'HTML', progress: 90 },
  { name: 'CSS', progress: 80 },
  { name: 'JavaScript', progress: 70 },
  { name: 'Tailwind', progress: 80 },
  { name: 'React', progress: 50 }
];

const ProgressBar = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-full ">
      <h1 className="text-3xl font-bold font-poppins text-Primary mt-10">Tool Completion Progress</h1>
      <div className=' w-full flex justify-center items-center flex-col pb-10'>
        {tools.map((tool, index) => (
          <div key={index} className=" w-1/2 ">
            <p className=" font-poppins text-2xl mt-10 text-text">
              {tool.name} - {tool.progress}%
            </p>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className={`bg-gradient-to-tl from-Secondary to-Primary rounded-full h-2`}
                style={{ width: `${tool.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
