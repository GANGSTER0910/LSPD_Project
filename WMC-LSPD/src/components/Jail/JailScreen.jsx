// import { useEffect, useState } from "react";
// import { Jail } from "../../assets";
// import { animateScroll as scroll } from "react-scroll";
// import ArrowBtn from "../../buttons/arrowBtn";
// import DotBtn from "../../buttons/DotBtn"
// import { useNavigate } from "react-router-dom";
// import WantedListModal from "./WantedListModal";
// import useStore from "../../Store/store";



// const JailScreen = () => {
//   // const [isWantedListOpen, setIsWantedListOpen] = useState(false);
//   const {isWantedBoxOpen, setWantedOpen, setCriminalOpen} = useStore()

//   const navigate = useNavigate();


//   const handleArrowClick = () => {
//     scroll.scrollToBottom({
//       duration: 1000,
//       smooth: true,
//     });
//   };
//   const handleArrowTopClick = () => {
//     scroll.scrollToTop({
//       duration: 1000,
//       smooth: true,
//     });
//   };

//   useEffect(() => {
//    handleArrowTopClick();
//   }, [scroll]);

//   return (
//     <div>
//       <div className="w-full overflow-y-auto absolute overflow-hidden">
//         <img className="object-contain " src={Jail} alt="Jail" />
//       </div>
//       <div className="absolute left-[5%] top-[5%]"  onClick={handleArrowClick}>
//         <ArrowBtn />
//       </div>
//       <div className="absolute right-[5%] bottom-[-105%]"  onClick={handleArrowTopClick}>
//         <ArrowBtn rotate={"rotate-180"} />
//       </div>
//       <div onClick={() => navigate("/station")} className="absolute right-[60%] top-[130%]">
//         <DotBtn nav={"Exit"} gate={true} rotate={true}/>
//       </div>
//       <div onClick={() => setWantedOpen(true)} className="absolute top-[40%] right-[20%]">
//         <DotBtn nav={"Wanted List"} />
//       </div>
//       <WantedListModal isOpen={isWantedBoxOpen} onClose={(() => setWantedOpen(false)) } />
//     </div>
//   );
// };

// export default JailScreen;
import { useEffect, useState } from "react";
import { Jail } from "../../assets";
import { animateScroll as scroll } from "react-scroll";
import ArrowBtn from "../../buttons/arrowBtn";
import DotBtn from "../../buttons/DotBtn";
import { useNavigate } from "react-router-dom";
import WantedListModal from "./WantedListModal";
import useStore from "../../Store/store";

const JailScreen = () => {
  // const [isWantedListOpen, setIsWantedListOpen] = useState(false);
  const { isWantedBoxOpen, setWantedOpen, setCriminalOpen } = useStore();

  const navigate = useNavigate();

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
  }, [scroll]);

  return (
    <div className="absolute sm:min-w-[100%] max-w-[200%]  overflow-hidden overflow-x-auto overflow-y-hidden">
      <div className="w-full h-full sm:overflow-y-auto sm:min-w-[100%] min-w-[200%] overflow-hidden object-cover overflow-x-auto">
        <img
          className="sm:object-contain sm:min-w-[100%]  sm:h-max h-[100vh] overflow-hidden  overflow-x-auto object-cover"
          src={Jail}
          alt="Jail"
        />
      </div>
      <div
        className="absolute sm:flex hidden left-[5%] top-[3%]"
        onClick={handleArrowClick}
      >
        <ArrowBtn />
      </div>
      <div
        className="absolute sm:flex hidden sm:right-[5%] sm:bottom-[3%]"
        onClick={handleArrowTopClick}
      >
        <ArrowBtn rotate={"rotate-180"} />
      </div>
      <div
        onClick={() => navigate("/station")}
        className="absolute top-[63%] right-[22%] sm:right-[61%] sm:top-[65%]"
      >
        <DotBtn nav={"Exit"} gate={true} rotate={true} />
      </div>
      <div
        onClick={() => setWantedOpen(true)}
        className="absolute top-[20%] right-[-60%] sm:top-[20%] sm:right-[25%]"
      >
        <DotBtn nav={"Wanted List"} />
      </div>
      <WantedListModal
        isOpen={isWantedBoxOpen}
        onClose={() => setWantedOpen(false)}
      />
    </div>
  );
};

export default JailScreen;