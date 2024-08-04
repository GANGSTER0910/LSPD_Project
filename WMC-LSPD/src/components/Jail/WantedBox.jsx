// import React, { useEffect, useState } from "react";
// import { BG1, BG2, BG3, BG4, BG5 } from "../../assets";
// import CriminalBoxModal from "./CriminalBoxModal";
// import useStore from "../../Store/store";
// import { Criminal } from "../../context/trialIndex";

// const WantedBox = ({
//   // key,
//   criminalAge,
//   criminalDuration,
//   img,
//   criminalName,
//   crime,
//   City,
//   Committed,
//   Sex,
//   DOB,
//   Rank,
//   Height,
// }) => {
//   const backgrounds = [BG1, BG2, BG3, BG4, BG5];
//   const {
//     selectedCriminal,
//     setCriminalBoxOpen,
//     isCriminalBoxOpen,
//     isWantedBoxOpen,
//     setCriminalOpen,
//   } = useStore();


  
//   // const [isCriminalBoxOpen, setCriminalOpen] = useState(false);

//   const getRandomBg = () => {
//     return backgrounds[Math.floor(Math.random() * backgrounds.length)];
//   };

//   const handleClick = () => {
//     // if (key === criminalName ) {
//     setCriminalBoxOpen(true);
//     setCriminalOpen(criminalName);
//     // alert(Key)
//     // }
//   };

//   const [isBg] = useState(getRandomBg());
  
//   return (
//     <>
//       {!isCriminalBoxOpen ? (
//         <div
//           // Key={key}
//           onClick={handleClick}
//           style={{ backgroundImage: `url(${isBg})` }}
//           className="static bg-cover sm:w-[48%] w-[96%] h-[20%] bg-black rounded-xl text-white flex justify-between items-center"
//         >
//           <div className="w-1/4 h-full flex justify-center items-center ml-2">
//             <img
//               className="object-cover w-[100%] h-[90%] rounded-md "
//               src={imageUrl}
//               alt={criminalName}
//             />
//           </div>
//           <div className="w-[70%] h-[90%] bg-white z-50 text-black flex rounded-md mr-2 pr-1 pt-1">
//             <div className="w-1/2 h-full flex flex-col justify-center items-center text-[0.9rem] pl-6 z-10">
//               <span className="w-full h-1/3 flex font-semibold justify-start items-center overflow-hidden whitespace-nowrap overflow-y-auto">
//                 {criminalName}
//               </span>
//               <span className="w-full h-1/3 flex justify-start items-center">
//                 Age: {criminalAge}
//               </span>
//               <span className="w-full h-1/3 flex justify-start items-center">
//                 For {criminalDuration} Years
//               </span>
//             </div>
//             <div className="w-2/4 h-full text-ellipsis overflow-hidden text-sm ">
//               {crime}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>
//           {/* {Criminal.map((criminal) => {
//             return ( */}

//           {selectedCriminal === criminalName && (
//             <CriminalBoxModal
//               isOpen={isCriminalBoxOpen && isWantedBoxOpen}
//               onClose={() => setCriminalBoxOpen(false)}
//               // Key={key}
//               Name={criminalName}
//               Age={criminalAge}
//               Duration={criminalDuration}
//               Img={null}
//               Crime={crime}
//               Height={Height}
//               DOB={DOB}
//               Sex={Sex}
//               City={City}
//               Committed={Committed}
//               Rank={Rank}
//             />
//           )}
//           {/* );
//           })} */}
//         </div>
//       )}
//     </>
//   );
// };

// export default WantedBox;


import React, { useEffect, useState } from "react";
import { BG1, BG2, BG3, BG4, BG5 } from "../../assets";
import CriminalBoxModal from "./CriminalBoxModal";
import useStore from "../../Store/store";
import { Criminal } from "../../context/trialIndex";

const WantedBox = ({
  // key,
  criminalAge,
  criminalDuration,
  img,
  criminalName,
  crime,
  City,
  Committed,
  Sex,
  DOB,
  Rank,
  Height,
}) => {
  const backgrounds = [BG1, BG2, BG3, BG4, BG5];
  const {
    selectedCriminal,
    setCriminalBoxOpen,
    isCriminalBoxOpen,
    isWantedBoxOpen,
    setCriminalOpen,
  } = useStore();


  
  // const [isCriminalBoxOpen, setCriminalOpen] = useState(false);

  const getRandomBg = () => {
    return backgrounds[Math.floor(Math.random() * backgrounds.length)];
  };

  const handleClick = () => {
    // if (key === criminalName ) {
    setCriminalBoxOpen(true);
    setCriminalOpen(criminalName);
    // alert(Key)
    // }
  };

  const [isBg] = useState(getRandomBg());  
  const imageUrl = `http://localhost:8000/images/${img}` ;
  return (
    <>
      {!isCriminalBoxOpen ? (
        <div
          // Key={key}
          onClick={handleClick}
          style={{ backgroundImage: `url(${isBg})` }}
          className="static bg-cover sm:w-[48%] w-[96%] h-[10%] sm:h-[20%] bg-black rounded-xl text-white flex justify-between items-center"
        >
          <div className="w-1/4 h-full flex justify-center items-center ml-2">
            <img
              className="object-cover w-[100%] h-[90%] rounded-md "
              src={imageUrl}
              alt={criminalName}
            />
          </div>
          <div className="sm:w-[70%] w-[65%] h-[90%] bg-white z-50 text-black flex rounded-md mr-2 pr-1 pt-1">
            <div className="w-1/2 h-full flex flex-col justify-center items-center text-[0.6rem] sm:text-[0.9rem] pl-3 sm:pl-6 z-10">
              <span className="w-full h-1/3 flex font-semibold justify-start items-center overflow-hidden whitespace-nowrap overflow-y-auto">
                {criminalName}
              </span>
              <span className="w-full h-1/3 flex justify-start items-center">
                Age: {criminalAge}
              </span>
              <span className="w-full h-1/3 flex justify-start items-center">
                For {criminalDuration} Years
              </span>
            </div>
            <div className="w-2/4 h-full text-ellipsis overflow-hidden text-[0.5rem] sm:text-sm ">
              {crime}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* {Criminal.map((criminal) => {
            return ( */}

          {selectedCriminal === criminalName && (
            <CriminalBoxModal
              isOpen={isCriminalBoxOpen && isWantedBoxOpen}
              onClose={() => setCriminalBoxOpen(false)}
              // Key={key}
              Name={criminalName}
              Age={criminalAge}
              Duration={criminalDuration}
              Img={null}
              Crime={crime}
              Height={Height}
              DOB={DOB}
              Sex={Sex}
              City={City}
              Committed={Committed}
              Rank={Rank}
            />
          )}
          {/* );
          })} */}
        </div>
      )}
    </>
  );
};

export default WantedBox;

// import React, { useState } from "react";
// import { BG1, BG2, BG3, BG4, BG5 } from "../../assets";
// import CriminalBoxModal from "./CriminalBoxModal";
// import useStore from "../../Store/store";

// const WantedBox = ({
//   criminalAge,
//   criminalDuration,
//   criminalImg,
//   criminalName,
//   crime,
//   City,
//   Commited,
//   Sex,
//   DOB,
//   Rank,
//   Height,
// }) => {
//   const backgrounds = [BG1, BG2, BG3, BG4, BG5];
//   const {
//     setCriminalOpen,
//     isCriminalBoxOpen,
//     selectedCriminal,
//     closeModals,
//     setCriminalBoxOpen,
//     isWantedBoxOpen,
//   } = useStore();

//   const getRandomBg = () => {
//     return backgrounds[Math.floor(Math.random() * backgrounds.length)];
//   };

//   const [isBg] = useState(getRandomBg());

//   const handleClick = () => {
//     setCriminalOpen(criminalName);
//     setCriminalBoxOpen(true);
//   };

//   return (
//     <>
//       <div
//         onClick={handleClick}
//         style={{ backgroundImage: `url(${isBg})` }}
//         className="static bg-cover sm:w-[48%] w-[96%] h-[20%] bg-black rounded-2xl text-white flex justify-around items-center"
//       >
//         <div className="w-1/4 h-full flex justify-center items-center">
//           <img
//             className="object-cover w-[90%] h-[90%] rounded-md"
//             src={criminalImg}
//             alt={criminalName}
//           />
//         </div>
//         <div className="w-[70%] h-[90%] bg-white z-50 text-black flex rounded-md">
//           <div className="w-1/2 h-full flex flex-col justify-center items-center text-[0.9rem] pl-4 z-10">
//             <span className="w-full h-1/3 flex justify-start items-center overflow-hidden whitespace-nowrap overflow-y-auto">
//               {criminalName}
//             </span>
//             <span className="w-full h-1/3 flex justify-start items-center">
//               Age: {criminalAge}
//             </span>
//             <span className="w-full h-1/3 flex justify-start items-center">
//               For {criminalDuration}
//             </span>
//           </div>
//           <div className="w-2/4 h-full overflow-y-auto overflow-hidden text-sm">
//             {crime}
//           </div>
//         </div>
//       </div>
//       {isCriminalBoxOpen && selectedCriminal === criminalName && (
//         <CriminalBoxModal
//           isOpen={isCriminalBoxOpen && isWantedBoxOpen}
//           onClose={() => setCriminalBoxOpen(false)}
//           Name={criminalName}
//           Age={criminalAge}
//           Duration={criminalDuration}
//           Img={criminalImg}
//           Crime={crime}
//           Height={Height}
//           DOB={DOB}
//           Sex={Sex}
//           City={City}
//           Commited={Commited}
//           Rank={Rank}
//         />
//       )}
//     </>
//   );
// };

// export default WantedBox;