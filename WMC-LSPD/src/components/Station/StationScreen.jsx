// import { useState } from "react";
// import { Station } from "../../assets";
// import SkipBtn from "../../buttons/SkipBtn";
// import { useNavigate } from "react-router-dom";
// import NewsModal from "./NewsModal";
// import CareerModal from "./CareerModal";

// import DotBtn from "../../buttons/DotBtn";
// import TipModal from "./TipModal";
// import useStore from "../../Store/store";

// const StationScreen = () => {
//   const [isNewsOpen, setIsNewsOpen] = useState(false);
//   const [isTipOpen, setIsTipOpen] = useState(false);
//   // const [isCareerOpen, setIsCareerOpen] = useState(false);

//   const {isCareerModalOpen,setCareerModalOpen} = useStore()

//   const navigate = useNavigate();

//   return (
//     <div className="sm:h-screen sm:w-[90%] sm:overflow-y-auto overflow-y-hidden overflow-x-auto sm:overflow-x-hidden m-0 p-0">
//       <img
//         className="absolute sm:min-w-[100%] min-h-screen min-w-[100%]  sm:w-full overflow-x-auto overflow-y-hidden sm:object-contain"
//         src={Station}
//         alt="Station"
//       />
//       <div
//         className="absolute  top-[65%]  right-[87%]"
//         onClick={() => navigate("/jail")}
//       >
//         <DotBtn nav={"Jail"} gate={true} rotate={true} />
//       </div>
//       <div
//         className="absolute top-[54%] right-[23%]"
//         onClick={() => navigate("/office")}
//       >
//         <DotBtn nav={"Office"} gate={true} />
//       </div>
//       <div
//         className="absolute top-[48%] right-[11%]"
//         onClick={() => setIsNewsOpen(true)}
//       >
//         <DotBtn nav={"News"} />
//       </div>
//       <div
//         className="absolute  sm:top-[120%] top-[60%] right-[47%]"
//         onClick={() => setCareerModalOpen(true)}
//       >
//         <DotBtn nav={"Careers"} />
//       </div>
//       <div
//         className="absolute  top-[60%] right-[38%]"
//         onClick={() => setIsTipOpen(true)}
//       >
//         <DotBtn nav={"Scan Me"} />
//       </div>

//       <NewsModal isOpen={isNewsOpen} onClose={() => setIsNewsOpen(false)} />
//       <TipModal isOpen={isTipOpen} onClose={() => setIsTipOpen(false)}/>
//       <CareerModal isOpen={isCareerModalOpen} onClose={() => setCareerModalOpen(false)}/>
//     </div>
//   );
// };
// export default StationScreen;
import { useState } from "react";
import { Station } from "../../assets";
import SkipBtn from "../../buttons/SkipBtn";
import { useNavigate } from "react-router-dom";
import NewsModal from "./NewsModal";
import CareerModal from "./CareerModal";

import DotBtn from "../../buttons/DotBtn";
import TipModal from "./TipModal";
import useStore from "../../Store/store";

const StationScreen = () => {
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isTipOpen, setIsTipOpen] = useState(false);
  // const [isCareerOpen, setIsCareerOpen] = useState(false);

  const {isCareerModalOpen,setCareerModalOpen} = useStore()

  const navigate = useNavigate();

  return (
    <div className="relative sm:h-screen h-[100vh] sm:w-[100%] sm:overflow-y-auto overflow-y-hidden overflow-x-auto sm:overflow-x-hidden m-0 p-0">
      <img
        className="absolute sm:min-w-[100%] min-h-screen min-w-[200%]  sm:w-full overflow-x-auto overflow-y-hidden sm:object-contain"
        src={Station}
        alt="Station"
      />
      <div
        className="absolute top-[27%] right-[73%]  sm:top-[65%]  sm:right-[87%]"
        onClick={() => navigate("/jail")}
      >
        <DotBtn nav={"Jail"} gate={true} rotate={true} />
      </div>
      <div
        className="absolute top-[25%] right-[-55%] sm:top-[54%] sm:right-[23%]"
        onClick={() => navigate("/office")}
      >
        <DotBtn nav={"Office"} gate={true} />
      </div>
      <div
        className="absolute top-[20%] right-[-75%] sm:top-[48%] sm:right-[11%]"
        onClick={() => setIsNewsOpen(true)}
      >
        <DotBtn nav={"News"} />
      </div>
      <div
        className="absolute top-[55%] right-[0%]  sm:top-[120%]  sm:right-[47%]"
        onClick={() => setCareerModalOpen(true)}
      >
        <DotBtn nav={"Careers"} />
      </div>
      <div
        className="absolute top-[25%] right-[-27%]  sm:top-[60%] sm:right-[38%]"
        onClick={() => setIsTipOpen(true)}
      >
        <DotBtn nav={"Scan Me"} />
      </div>

      <NewsModal isOpen={isNewsOpen} onClose={() => setIsNewsOpen(false)} />
      <TipModal isOpen={isTipOpen} onClose={() => setIsTipOpen(false)}/>
      <CareerModal isOpen={isCareerModalOpen} onClose={() => setCareerModalOpen(false)}/>
    </div>
  );
};
false
export default StationScreen;