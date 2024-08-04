// // import NewsBox from "./NewsBox";
// // import CloseIcon from "@mui/icons-material/Close";
// // // import { News } from "./trialIndex";
// // import { Button } from "@mui/material";
// // import React, { useState, useEffect } from 'react';
// // // import { News } from "../../context/trialIndex";

// // const NewsModal = ({ isOpen, onClose }) => {
  
// //     const [announcements, setAnnouncements] = useState([]);
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try {
// //                 const response = await fetch('http://localhost:8000/announcements/list',{
// //                 method: 'GET',
// //                 mode: 'cors',
// //                 headers: {
// //                 'Content-Type': 'application/json',
// //                 },
// //             // body: JSON.stringify({role}),
// //             credentials: "include",});
// //                 if (response.ok) {
// //                     const data = await response.json();
// //                     setAnnouncements(data);
// //                 } else {
// //                     console.error('Failed to fetch announcements');
// //                 }
// //             } catch (error) {
// //                 console.error('Error fetching announcements:', error);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };
// //         fetchData();
// //     }, []);
// //   if (!isOpen) return null;
// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center z-50 ">
// //       <div onClick={onClose} className="absolute inset-0 bg-black opacity-50"></div>
// //       <div className=" bg-gray-200 w-[80%] h-[90%] z-10 flex justify-around items-center flex-col p-4 rounded-2xl">
// //         <div className=" w-full h-[10%] mb-4 font-pricedown flex justify-end static bg-[#b392ac] rounded-2xl">
// //           <h2 className="text-black flex justify-center items-center w-full h-full text-4xl ">
// //             News & Announcements
// //           </h2>

// //           <Button onClick={onClose}>
// //             <CloseIcon className="text-black" />
// //           </Button>
// //         </div>

// //         <div className="w-full h-[90%] px-5 py-2 gap-3 flex flex-col overflow-y-auto">
// //           {loading ? (
// //             <p>Loading...</p>
// //           ) : (
// //             announcements.map((news, index) => (
// //               <div key={index} className="w-full h-full">
// //                 <NewsBox
// //                   img={news.img}
// //                   by={news.by}
// //                   content={news.content}
// //                   header={news.header}
// //                 />
// //               </div>
// //            )))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// // export default NewsModal;
// // // import React, { useState, useEffect } from "react";
// // // import NewsBox from "./NewsBox";
// // // import CloseIcon from "@mui/icons-material/Close";
// // // import { Button } from "@mui/material";

// // // const NewsModal = ({ isOpen, onClose }) => {
// // //   const [announcements, setAnnouncements] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const response = await fetch("http://localhost:8000/announcements/list");
// // //         if (response.ok) {
// // //           const data = await response.json();
// // //           setAnnouncements(data);
// // //         } else {
// // //           console.error("Failed to fetch announcements");
// // //         }
// // //       } catch (error) {
// // //         console.error("Error fetching announcements:", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   if (!isOpen) return null;

// // //   return (
// // //     <div className="fixed inset-0 flex items-center justify-center z-50">
// // //       <div className="absolute inset-0 bg-black opacity-50"></div>
// // //       <div className="bg-gray-200 w-[80%] h-[90%] z-10 flex justify-around items-center flex-col rounded-2xl">
// // //         <span className="static w-full h-[10%] text-3xl font-poppins flex justify-between items-center">
// // //           <span className="w-1/2 flex justify-center items-center h-full">
// // //             News & Announcements
// // //           </span>
// // //           <span
// // //             onClick={onClose}
// // //             className="flex justify-end items-center h-full w-1/4 p-6 cursor-pointer text-black"
// // //           >
// // //             <Button>
// // //               <CloseIcon className="text-black" />
// // //             </Button>
// // //           </span>
// // //         </span>

// // //         <div className="w-full h-[90%] px-5 py-2 gap-3 flex flex-col overflow-y-auto">
// // //           {loading ? (
// // //             <p>Loading...</p>
// // //           ) : (
// // //             announcements.map((news, index) => (
// // //               <div key={index} className="w-full h-full">
// // //                 <NewsBox
// // //                   // img={news.img}
// // //                   by={news.by}
// // //                   content={news.content}
// // //                   header={news.header}
// // //                 />
// // //               </div>
// // //             ))
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default NewsModal;
// import React, { useState, useEffect } from "react";
// import NewsBox from "./NewsBox";
// import CloseIcon from "@mui/icons-material/Close";
// import { Button } from "@mui/material";

// const NewsModal = ({ isOpen, onClose }) => {
//   const [announcements, setAnnouncements] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/announcements/list", {
//           method: "GET",
//           mode: "cors",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           credentials: "include",
//         });
//         if (response.ok) {
//           const data = await response.json();
//           setAnnouncements(data);
//         } else {
//           console.error("Failed to fetch announcements");
//         }
//       } catch (error) {
//         console.error("Error fetching announcements:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div onClick={onClose} className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="bg-gray-200 w-[80%] h-[90%] z-10 flex justify-around items-center flex-col p-4 rounded-2xl">
//         <div className="w-full h-[10%] mb-4 font-pricedown flex justify-end bg-[#b392ac] rounded-2xl">
//           <h2 className="text-black flex justify-center items-center w-full h-full text-4xl">
//             News & Announcements
//           </h2>
//           <Button onClick={onClose}>
//             <CloseIcon className="text-black" />
//           </Button>
//         </div>
//         <div className="w-full h-[90%] px-5 py-2 gap-3 flex flex-col overflow-y-auto">
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             announcements.map((news) => (
//               <div key={news._id} className="w-full h-full">
//                 <NewsBox
//                   img={news.img}
//                   by={news.by}
//                   content={news.content}
//                   header={news.title}
//                 />
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsModal;

// import React, { useState, useEffect } from "react";
// import NewsBox from "./NewsBox";
// import CloseIcon from "@mui/icons-material/Close";
// import { Button } from "@mui/material";

// const NewsModal = ({ isOpen, onClose }) => {
//   const [announcements, setAnnouncements] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/announcements/list", {
//           method: "GET",
//           mode: "cors",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           credentials: "include",
//         });
//         if (response.ok) {
//           const data = await response.json();
//           setAnnouncements(data);
//         } else {
//           console.error("Failed to fetch announcements");
//         }
//       } catch (error) {
//         console.error("Error fetching announcements:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div onClick={onClose} className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="bg-gray-200 w-[80%] h-[90%] z-10 flex justify-around items-center flex-col p-4 rounded-2xl">
//         <div className="w-full h-[10%] mb-4 font-pricedown flex justify-end bg-[#b392ac] rounded-2xl">
//           <h2 className="text-black flex justify-center items-center w-full h-full text-4xl">
//             News & Announcements
//           </h2>
//           <Button onClick={onClose}>
//             <CloseIcon className="text-black" />
//           </Button>
//         </div>
//         <div className="w-full h-[90%] px-5 py-2 gap-3 flex flex-col overflow-y-auto">
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             announcements.map((news) => (
//               <div key={news.id} className="w-full h-full">
//                 <NewsBox
//                   img={news.img}
//                   by={news.by}
//                   content={news.content}
//                   header={news.title}
//                 />
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsModal;

import NewsBox from "./NewsBox";
import CloseIcon from "@mui/icons-material/Close";
// import { News } from "./trialIndex";
import { Button } from "@mui/material";
import React, { useState, useEffect } from 'react';
// import { News } from "../../context/trialIndex";

const NewsModal = ({ isOpen, onClose }) => {
  
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/announcements/list", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setAnnouncements(data);
        } else {
          console.error("Failed to fetch announcements");
        }
      } catch (error) {
        console.error("Error fetching announcements:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div onClick={onClose} className="absolute inset-0 bg-black opacity-50"></div>
      <div className=" bg-gray-200 w-[80%] h-[90%] z-10 flex justify-around items-center flex-col p-4 rounded-2xl">
        <div className=" w-full h-[7%] sm:h-[10%] mb-4 font-pricedown flex justify-end static bg-[#b392ac] rounded-2xl">
          <h2 className="text-black  flex justify-center items-center w-full h-full text-xl text-nowrap sm:text-4xl ">
            News & Announcements
          </h2>

          <Button onClick={onClose} size="small">
            <CloseIcon sx={{ fontSize: 22 }}  className="text-black" />
          </Button>
        </div>

        <div className="w-full h-[90%]  px-5 py-2 gap-3 flex flex-col overflow-y-auto">
          {announcements.map((news) => (
            <div  key={news.header} className="w-full h-full">
                <NewsBox
                  img={news.img}
                  by={news.by}
                  content={news.content}
                  header={news.header}
                />
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};


export default NewsModal;