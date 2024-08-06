import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import React, { useState } from "react";
import useStore from "../../Store/store";
import { upload } from "../../assets";

const AddAdminModal = ({ isOpen, onClose }) => {
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    img: null,
    password: "",
  });

  const { setToastr } = useStore();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      setAdminData({ ...adminData, img: files[0] });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleFileChange = (e) => {
    setAdminData({ ...adminData, img: e.target.files[0] });
  };

  const dataEmpty = () => {
    setAdminData({
      img: null,
      name: "",
      email: "",
      password: "",
    });
  };

  const handleClose = () => {
    onClose();
    dataEmpty();
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(adminData);
    const{img, name, email, password} = adminData;
    const role = "admin";
    const formDataObj = new FormData();
    formDataObj.append("file", img);
    formDataObj.append("name", name);
    formDataObj.append("email", email);
    formDataObj.append("password", password);
    formDataObj.append("role","admin")
    const response = await fetch('https://lspd-project.onrender.com/admin', {
      method: 'POST',
      // mode: 'cors',
      credentials:'include',
      body:formDataObj
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    handleClose();
    setToastr(`Admin Added Succesfuly `);
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 justify-center items-center flex z-30 font-technor">
      <div onClick={handleClose} className="absolute inset-0  "></div>
      <div className=" w-[80%] h-[90%] bg-white p-4 rounded-lg flex flex-col gap-4 z-20 shadow-lg">
        <div className=" w-full h-[10%] flex justify-end static items-center bg-[#a8dadc] rounded-2xl">
          <h2 className="text-black flex justify-center items-center w-full h-full text-4xl font-pricedown ">
            Add Admin
          </h2>

          <Button onClick={handleClose}>
            <CloseIcon className="text-black" />
          </Button>
        </div>

        <div className="w-full h-[90%] p-6">
          <form
            className="flex w-full h-full overflow-auto gap-6"
            onSubmit={handleSubmit}
          >
            <div className="w-1/4 h-full">
              <div className="flex justify-center w-full h-[60%]">
                <label
                  htmlFor="file"
                  className="cursor-pointer bg-gray-200 w-full p-8 rounded-2xl border-2 border-dashed border-gray-600 shadow-lg   items-center justify-center"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <div className="flex h-[100%] flex-col items-center justify-center gap-2">
                    <img className="w-[60%] h-[40%] " src={upload} alt="" />
                    {!adminData.img && (
                      <div className="flex h-[60%] justify-center flex-col items-center text-lg">
                        <p>Drag and Drop</p>
                        <p>or</p>
                      </div>
                    )}

                    {adminData.img && (
                      <div className="mt-2 text-center">
                        <p className="text-lg font-semibold">Selected file:</p>
                        <p>{adminData.img.name}</p>
                      </div>
                    )}

                    <span className="bg-gray-600 w-[70%] text-white px-4 p-2 rounded-lg transition duration-300 hover:bg-gray-800 flex justify-center items-center">
                      Browse file
                    </span>
                  </div>
                  <input
                    id="file"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
            <div className="w-3/4 h-full flex flex-col gap-2">
              <div className="flex flex-col gap-2 h-[25%]">
                <label className="text-lg font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={adminData.name}
                  onChange={handleInputChange}
                  placeholder="Name of the Admin"
                  className="p-2 border h-[50%] border-gray-400 rounded-lg"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 h-[25%]">
                <label className="text-lg font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={adminData.email}
                  placeholder="Enter the Email of the Admin"
                  onChange={handleInputChange}
                  className="p-2  border border-gray-400 rounded-lg min-h-[50%] max-h-[50%] overflow-y-auto"
                  rows="4"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 h-[25%]">
                <label className="text-lg font-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter the Password"
                  value={adminData.password}
                  onChange={handleInputChange}
                  className="p-2 h-[50%] border border-gray-400 rounded-lg"
                  required
                />
              </div>

              {/* <Button
                type="submit"
                className="self-end mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Submit
              </Button> */}
              <div className="w-[99%] h-[10%] overflow-visible flex justify-center items-start mt-5">
                <button
                  className="button w-[15%] h-[70%] text-xl flex justify-center items-center"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdminModal;