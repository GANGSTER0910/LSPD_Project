import React, { useEffect, useState } from "react";
import { Admin } from "../../assets";
import { useNavigate } from "react-router-dom";
import DotBtn from "../../buttons/DotBtn";
import { animateScroll as scroll } from "react-scroll";
import ArrowBtn from "../../buttons/arrowBtn";

// Modals
import CriminalAddModal from "./CriminalAddModal";
import AddJobModal from "./AddJobModal";
import AdminAddModal from "./AdminAddModal";
import CreateNewsModal from "./CreateNewsModal";
import ViewTipModal from "./ViewTipModal";

//

const OfficeScreen = () => {
  const navigate = useNavigate();
  const [isAddJobOpen, setIsAddJobOpen] = useState(false);
  const [isCreateNewsOpen, setIsCreateNewsOpen] = useState(false);
  const [isAdminAddOpen, setIsAdminAddOpen] = useState(false);
  const [isViewTipOpen, setIsViewTipOpen] = useState(false);
  const [isAddCriminalOpen, setIsAddCriminalOpen] = useState(false);

  const handleArrowClick = () => {
    scroll.scrollToBottom({
      duration: 1000,
      smooth: true,
    });
  };
  const handleArrowTopClick = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
  };

  useEffect(() => {
    handleArrowTopClick();
  }, []);

  return (
    <div>
      <div className="w-full overflow-hidden">
        <img
          className="w-[100%] absolute object-cover overflow-x-hidden"
          src={Admin}
          alt=""
        />
      </div>
      <div className="absolute left-[3%] top-[3%]" onClick={handleArrowClick}>
        <ArrowBtn />
      </div>
      <div
        className="absolute right-[3%] bottom-[-105%] "
        onClick={handleArrowTopClick}
      >
        <ArrowBtn rotate={"rotate-180"} />
      </div>

      <div
        className="absolute right-[50%] top-[45%]"
        onClick={() => {
          navigate("/station");
        }}
      >
        <DotBtn gate={true} nav={"Exit"} />
      </div>

      <div
        onClick={() => setIsCreateNewsOpen(true)}
        className="absolute top-[125%] right-[80%]"
      >
        <DotBtn nav={"Create News"} />
      </div>

      <div
        onClick={() => setIsAddCriminalOpen(true)}
        className="absolute top-[155%] right-[55%]"
      >
        <DotBtn nav={"Add Criminal"} />
      </div>

      <div
        onClick={() => setIsViewTipOpen(true)}
        className="absolute top-[170%] right-[30%]"
      >
        <DotBtn nav={"View Tips"} />
      </div>

      <div
        onClick={() => setIsAddJobOpen(true)}
        className="absolute top-[120%] right-[28%]"
      >
        <DotBtn nav={"Add Job"} />
      </div>

      <div
        onClick={() => setIsAdminAddOpen(true)}
        className="absolute top-[99%] right-[75%]"
      >
        <DotBtn nav={"Admin Hub"} admin={true} />
      </div>
      <div
        onClick={() => setIsAdminAddOpen(true)}
        className="absolute top-[99%] right-[25%]"
      >
        <DotBtn nav={"Admin Hub"} admin={true} />
      </div>

      <CriminalAddModal
        isOpen={isAddCriminalOpen}
        onClose={() => setIsAddCriminalOpen(false)}
      />
      <ViewTipModal
        isOpen={isViewTipOpen}
        onClose={() => setIsViewTipOpen(false)}
      />
      <AdminAddModal
        isOpen={isAdminAddOpen}
        onClose={() => setIsAdminAddOpen(false)}
      />
      <CreateNewsModal
        isOpen={isCreateNewsOpen}
        onClose={() => setIsCreateNewsOpen(false)}
      />
      <AddJobModal
        isOpen={isAddJobOpen}
        onClose={() => setIsAddJobOpen(false)}
      />
    </div>
  );
};

export default OfficeScreen;