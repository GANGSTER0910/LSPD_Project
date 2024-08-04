// import React from 'react';
// import LikeBtn from '../../buttons/LikeBtn'; // Ensure LikeBtn is correctly implemented
// import placeholderimg from '../../assets/Admin - 16.jpeg'; // Check the path to the placeholder image

// const NewsBox = ({ header, content, by, img }) => {
//   const imageUrl = `http://localhost:8000/images/${img}` ;

//   return (
//     <div className="w-full h-[130px] bg-white rounded-2xl flex justify-around py-1 shadow-[1px_2px_3px_1px_rgba(0,0,0,0.4)]">
//       <div className="w-[17%] h-full rounded-xl p-2">
//         <img src={imageUrl} alt="News Image" className="w-full h-full object-cover rounded-xl" />
//       </div>
//       <div className="w-[75%] h-full bg-white rounded-3xl p-2 gap-3 flex flex-col">
//         <p className="h-[20%] font-poppins font-bold text-base whitespace-pre-wrap pl-2">
//           {header}
//         </p>
//         <p className="w-full h-[60%] font-poppins text-sm text-light-gray overflow-hidden overflow-y-auto whitespace-pre-wrap">
//           {content}
//         </p>
//         <div className="h-[20%] w-full flex justify-between text-sm">
//           <div className="w-1/3 flex justify-around">
//             <button aria-label="Like">
//               <LikeBtn />
//             </button>
//             <button aria-label="Comment">Comment</button>
//           </div>
//           <div className="w-1/3 font-poppins flex items-center justify-end">
//             Posted By: {by}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsBox;
// import React from 'react';
// import LikeBtn from '../../buttons/LikeBtn';

// const NewsBox = ({ header, content, by, img }) => {
  // const imageUrl = `http://localhost:8000/images/${img}` ;

//   return (
//     <div className="w-full h-[130px] bg-white rounded-2xl flex justify-around py-1 shadow-[1px_2px_3px_1px_rgba(0,0,0,0.4)]">
//       <div className="w-[17%] h-full rounded-xl p-2">
//         <img src={imageUrl} alt="News Image" className="w-full h-full object-cover rounded-xl" />
//       </div>
//       <div className="w-[75%] h-full bg-white rounded-3xl p-2 gap-3 flex flex-col">
//         <p className="h-[20%] font-poppins font-bold text-base whitespace-pre-wrap pl-2">
//           {header}
//         </p>
//         <p className="w-full h-[60%] font-poppins text-sm text-light-gray overflow-hidden overflow-y-auto whitespace-pre-wrap">
//           {content}
//         </p>
//         <div className="h-[20%] w-full flex justify-between text-sm">
//           <div className="w-1/3 flex justify-around">
//             <button aria-label="Like">
//               <LikeBtn />
//             </button>
//             <button aria-label="Comment">Comment</button>
//           </div>
//           <div className="w-1/3 font-poppins flex items-center justify-end">
//             Posted By: {by}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsBox;

// import React from "react";
// import LikeBtn from "../../buttons/LikeBtn";

// const NewsBox = ({header,content,by,img}) => {
//   const imconst imageUrl = `http://localhost:8000/images/${img}` ;

//   return (
//     <div className="w-full h-[100px] sm:h-[130px]  bg-white rounded-2xl flex justify-around py-1 shadow-[1px_2px_3px_1px_rgba(0,0,0,0.4)] shadow-light-gray " >
//       <div className="sm:w-[17%] w-[25%] h-full rounded-xl ">
//         <img src={imageUrl} className="w-full h-full object-cover rounded-xl p-2 "/>
//       </div>
//       <div className="w-[75%] h-full  bg-white rounded-3xl sm:p-2 sm:gap-3 flex flex-col object-cover">
//         <p className="h-[20%] newsHeader w-full font-poppins font-bold text-[0.8rem] sm:text-base  sm:whitespace-pre-wrap pl-2">
//           {header}
//         </p>
//         <p className="sm:w-full w-[98%] pr-2 h-[60%] font-poppins text-xs sm:text-sm text-light-gray overflow-hidden sm:overflow-y-auto overflow-y-auto py-[0.2rem] whitespace-pre-wrap">
//           {content}
          
//         </p>
//         <div className="h-[20%] w-full flex justify-around sm:justify-between text-xs sm:text-sm">
//           <div className="sm:w-1/3 w-1/2 flex justify-around">
//             <button className="">
//               <LikeBtn />
//             </button>
//             <button>Comment</button>
//           </div>

//           <div className="sm:w-1/3 w-1/2 font-poppins text-nowrap flex justify-center items-center"> <h2 className="hidden sm:flex">Post By :- </h2>{by}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsBox;
// import React from "react";
// import LikeBtn from "../../buttons/LikeBtn";

// const NewsBox = ({header,content,by,img}) => {
  // const imageUrl = `http://localhost:8000/images/${img}` ;
//   return (
//     <div className="w-full h-[100px] sm:h-[130px]  bg-white rounded-2xl flex justify-around py-1 shadow-[1px_2px_3px_1px_rgba(0,0,0,0.4)] shadow-light-gray " >
//       <div className="sm:w-[17%] w-[25%] h-full rounded-xl ">
//         <img src={imageUrl} className="w-full h-full object-cover rounded-xl p-2 "/>
//       </div>
//       <div className="w-[75%] h-full  bg-white rounded-3xl sm:p-2 sm:gap-3 flex flex-col object-cover">
//         <p className="h-[20%] newsHeader w-full font-poppins font-bold text-[0.8rem] sm:text-base  sm:whitespace-pre-wrap pl-2">
//           {header}
//         </p>
//         <p className="sm:w-full w-[98%] pr-2 h-[60%] font-poppins text-xs sm:text-sm text-light-gray overflow-hidden sm:overflow-y-auto overflow-y-auto py-[0.2rem] whitespace-pre-wrap">
//           {content}
          
//         </p>
//         <div className="h-[20%] w-full flex justify-around sm:justify-between text-xs sm:text-sm">
//           <div className="sm:w-1/3 w-1/2 flex justify-around">
//             <button className="">
//               <LikeBtn />
//             </button>
//             <button>Comment</button>
//           </div>

//           <div className="sm:w-1/3 w-1/2 font-poppins text-nowrap flex justify-center items-center"> <h2 className="hidden sm:flex">Post By :- </h2>{by}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsBox;
import React from "react";
import LikeBtn from "../../buttons/LikeBtn";

const NewsBox = ({header,content,by,img}) => {
  const imageUrl = `http://localhost:8000/images/${img}` ;
  return (
    <div className="w-full h-[100px] sm:h-[130px]  bg-white rounded-2xl flex justify-around py-1 shadow-[1px_2px_3px_1px_rgba(0,0,0,0.4)] shadow-light-gray " >
      <div className="sm:w-[17%] w-[25%] h-full rounded-xl ">
        <img src={imageUrl} className="w-full h-full object-cover rounded-xl p-2 "/>
      </div>
      <div className="w-[75%] h-full  bg-white rounded-3xl sm:p-2 sm:gap-3 flex flex-col object-cover">
        <p className="h-[20%] newsHeader w-full font-poppins font-bold text-[0.8rem] sm:text-base  sm:whitespace-pre-wrap pl-2">
          {header}
        </p>
        <p className="sm:w-full w-[98%] pr-2 h-[60%] font-poppins text-xs sm:text-sm text-light-gray overflow-hidden sm:overflow-y-auto overflow-y-auto py-[0.2rem] whitespace-pre-wrap">
          {content}
          
        </p>
        <div className="h-[20%] w-full flex justify-around sm:justify-between text-xs sm:text-sm">
          <div className="sm:w-1/3 w-1/2 flex justify-around">
            <button className="">
              <LikeBtn />
            </button>
            <button>Comment</button>
          </div>

          <div className="sm:w-1/3 w-1/2 font-poppins text-nowrap flex justify-center items-center"> <h2 className="hidden sm:flex">Post By :- </h2>{by}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsBox;