import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TipBox from "./TipBox";
import { useEffect, useState } from "react";

const ViewTipModal = ({ isOpen, onClose }) => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/tips/list', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          setTips(data);
        } else {
          console.error('Failed to fetch tips');
        }
      } catch (error) {
        console.error('Error fetching tips:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 justify-center items-center flex z-30 font-technor">
      <div onClick={onClose} className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="w-[80%] h-[90%] bg-white p-4 rounded-lg flex flex-col gap-4 z-20">
        <div className="w-full h-[10%] flex justify-end static bg-[#e26d5c] rounded-2xl">
          <h2 className="text-black flex justify-center items-center w-full h-full text-4xl font-pricedown ">
            View Tip
          </h2>

          <Button onClick={onClose}>
            <CloseIcon className="text-black" />
          </Button>
        </div>

        <div className="w-full h-[90%] flex flex-col text-2xl overflow-hidden overflow-y-auto gap-3 items-center pb-3 pt-2">
          {loading ? (
            <div>Loading...</div>
          ) : (
            tips.map((tip) => (
              <TipBox
                key={tip.header}
                by={tip.name}
                against={tip.against}
                tip={tip.description}
                tipHeader={tip.header}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};


export default ViewTipModal;
