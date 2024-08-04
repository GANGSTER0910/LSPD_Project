import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AddAdmin, admin } from "../../assets";
import { useState } from "react";
import AddAdminModal from "./AddAdminModal";
import ViewAdminModal from "./ViewAdminModal";

const AdminAddModal = ({ isOpen, onClose }) => {
  const [isAddAdminOpen, setIsAddAdminOpen] = useState(false);
  const [isViewAdminOpen, setIsViewAdminOpen] = useState(false);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 justify-center items-center flex z-30 font-technor">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black opacity-50 "
      ></div>
      <div className=" w-[80%] h-[90%] bg-white p-4 rounded-lg flex flex-col gap-4 z-20">
        <div className=" w-full h-[10%] flex justify-end static bg-[#a8dadc] rounded-2xl">
          <h2 className="text-black flex justify-center items-center w-full h-full text-4xl font-pricedown ">
            Admin Management
          </h2>

          <Button onClick={onClose}>
            <CloseIcon className="text-black" />
          </Button>
        </div>

        <div className="w-full h-[90%] flex justify-center items-center text-2xl">
          <div className="w-1/2 h-full flex justify-center items-center">
            <div
              onClick={() => setIsAddAdminOpen(true)}
              className="w-4/5 h-4/5 border-2 rounded-lg flex justify-center p-4 items-center bg-[#e5e5e5] hover:bg-[#bcb8b1] hover:bg-opacity-70 border-gray-400 hover:border-black transition-all duration-200 ease-linear text-3xl flex-col cursor-pointer"
            >
              <img className="w-4/5 h-4/5" src={AddAdmin} alt="" />
              <h2 className="h-1/3 transition-all duration-200 ease-linear">
                Add Admin
              </h2>
            </div>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center ">
            <div
              onClick={() => setIsViewAdminOpen(true)}
              className="w-4/5 h-4/5 border-2 rounded-lg flex justify-center p-4 items-center bg-[#e5e5e5] hover:bg-[#bcb8b1] hover:bg-opacity-70 border-gray-400 hover:border-black transition-all duration-200 ease-linear text-3xl flex-col cursor-pointer"
            >
              <img className="w-4/5 h-4/5" src={admin} alt="" />
              <h2 className="h-1/3 transition-all duration-200 ease-linear">
                View Admin's
              </h2>
            </div>
          </div>
        </div>
      </div>
      <AddAdminModal
        isOpen={isAddAdminOpen}
        onClose={() => setIsAddAdminOpen(false)}
      />
      <ViewAdminModal
        isOpen={isViewAdminOpen}
        onClose={() => setIsViewAdminOpen(false)}
      />
    </div>
  );
};

export default AdminAddModal;