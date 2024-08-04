import React from "react";

const AdminViewBox = ({ name, contact, img, email }) => {
  const imageUrl = `http://localhost:8000/images/${img}` ;

  return (
    <div className="static bg-white bg-cover sm:w-[48%] w-[96%] h-[20%] border-black border-2 rounded-xl  flex justify-between items-center">
      <div className="w-1/4 h-full flex justify-center items-center ml-2">
        <img
          className="object-cover w-[100%] h-[90%] rounded-md "
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="w-[70%] h-[90%] bg-white flex-col z-50 text-black flex rounded-md pl-6 mr-2 pr-1 pt-1">
        <div className="w-full h-1/2 flex  justify-center items-center text-lg  z-10">
          <span className="w-1/2 h-full flex font-semibold justify-start items-center">
            {name}
          </span>
          <span className="w-1/2 h-full flex justify-start items-center">
            {contact}
          </span>
        </div>
        <div className="w-full h-1/2 text-ellipsis justify-start flex items-center gap-2 text-lg">
          <strong>Email :- </strong>   {email}
        </div>
      </div>
    </div>
  );
};

export default AdminViewBox;