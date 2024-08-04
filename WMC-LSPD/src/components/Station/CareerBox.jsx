import React from "react";
import useStore from "../../Store/store";
import CareerDetailModal from "./CareerDetailModal";

const CareerBox = ({jobName, salary,requirement ,description, deadline, vacancy, status  }) => {
  const {
    setCareerBoxOpen,
    isCareerBoxOpen, 
    setCareerOpen,
    selectedJob,
    isCareerModalOpen
  } = useStore();


  const handleClick = () =>{
    setCareerBoxOpen(true);
    setCareerOpen(jobName)
  }
  return (
    <>
      {!isCareerBoxOpen ? (
        <div
          // Key={key}
          onClick={handleClick}
          className="static bg-cover sm:w-[30%] w-[47%] h-[60px] sm:h-[80px] bg-[#52b69a] bg-opacity-30 border-black border-[3px] sm:border-4 rounded-md sm:rounded-xl text-white flex justify-center items-center"
        >
          <div className="w-[97%] h-[90%] bg-white z-50 text-black flex rounded-md">
            <div className="w-1/2 h-full flex flex-col justify-center items-center text-xs sm:text-[0.9rem] pl-3 z-10">
              <span className="w-full h-1/3 flex font-semibold justify-start items-center overflow-hidden whitespace-nowrap">
                {jobName}
              </span>
              <span className="w-full h-1/3 flex justify-start items-center text-nowrap overflow-hidden">
                Vacancy: {vacancy} Candidates
              </span>
              <span className="w-full h-1/3 flex justify-start items-center text-nowrap overflow-hidden">
                <h3 className="hidden sm:flex">Deadline : </h3>{deadline}
              </span>
            </div>
            <div className="w-2/4 h-full overflow-hidden text-xs sm:text-sm  pl-4 mr-1 sm:mt-1 sm:mb-3 justify-center items-center ">
              {description}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* {Criminal.map((criminal) => {
          return ( */}

          {selectedJob === jobName && (
            <CareerDetailModal
              isOpen={isCareerBoxOpen && isCareerModalOpen}
              onClose={() => setCareerBoxOpen(false)}
              Name={jobName}
              Salary={salary}
              Deadline = {deadline}
              Requirement = {requirement}
              Description = {description}
              Vacancy={vacancy}
              Status = {status}
            />
          )}
          {/* );
        })} */}
        </div>
      )}
    </>
  );
};

export default CareerBox;