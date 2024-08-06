import React, { useEffect, useState, useMemo } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { Dark, LSPD, LSPD1, Person, Star } from "../../assets";
import WantedBox from "./WantedBox";

const WantedListModal = ({ isOpen, onClose }) => {
  const [wantedList, setWantedList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://lspd-project.onrender.com/most_wanted_list', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          setWantedList(data);
        } else {
          console.error('Failed to fetch wanted list');
        }
      } catch (error) {
        console.error('Error fetching wanted list:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const starCounts = useMemo(() => {
    const counts = { Star1: 0, Star2: 0, Star3: 0, Star4: 0, Star5: 0 };

    wantedList.forEach(({ Rank }) => {
      if (counts[`Star${Rank}`] !== undefined) {
        counts[`Star${Rank}`]++;
      }
    });

    return counts;
  }, [wantedList]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 font-technor">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black opacity-50"
      ></div>
      <div className="bg-white w-4/5 h-[90%] rounded-md z-20 p-4">
        <div className="w-full h-[7%] sm:h-[10%] font-pricedown flex justify-end bg-[#b392ac] rounded-2xl">
          <h2 className="text-black flex justify-center items-center w-full h-full text-2xl sm:text-4xl">
            Most Wanted List
          </h2>
          <Button onClick={onClose}>
            <CloseIcon className="text-black" />
          </Button>
        </div>
        <div className="h-[90%] rounded-b-2xl w-full px-5 py-2 gap-3 flex flex-col overflow-y-auto">
          <div
            style={{ backgroundImage: `url(${Dark})` }}
            className="w-full sm:h-[15%] h-[10%] bg-cover bg-center border-2 border-black rounded-md object-cover"
          >
            <div className="flex w-full h-full justify-around items-center">
              <div className="sm:w-[20%] w-[10%] h-full flex justify-center items-center">
                <img
                  src={LSPD}
                  alt=""
                  className="w-[100%] h-[200%] object-contain"
                />
              </div>
              <span className="sm:w-[60%] w-[80%] h-full bg-transparent flex flex-col">
                <div className="w-full h-full flex text-white">
                  {Object.entries(starCounts).map(([key, count], index) => (
                    <div key={key} className="w-[25%] text-[0.7rem] sm:text-lg h-full flex flex-col justify-center items-center sm:gap-1 gap-4">
                      <h2 className="flex gap-1 justify-center items-center">
                        <span className="flex gap-1 justify-center items-center">
                          {index + 2} <img className="sm:size-full w-[70%] flex justify-center items-center" src={Star} alt="Star" />
                        </span> :-
                        <span className="Rank flex gap-1 justify-center items-center">
                          {count} <img className="sm:size-full w-[60%] flex justify-center items-center" src={Person} alt="Person" />
                        </span>
                      </h2>
                    </div>
                  ))}
                  <div className="w-2/4 text-[0.5rem] sm:text-xl text-white flex justify-center items-center">
                    Total Criminals: {wantedList.length}
                    <img className="sm:w-[25px] w-[13px] sm:h-[25px]" src={Person} alt="" />
                  </div>
                </div>
              </span>
              <div className="sm:w-[20%] w-[10%] h-full flex justify-center items-center">
                <img
                  src={LSPD1}
                  alt=""
                  className="w-[100%] h-[200%] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="h-full text-wrap flex-wrap z-30 w-full flex gap-2 p-1 justify-around items-start overflow-y-auto">
            {loading ? (
              <p>Loading...</p>
            ) : (
              wantedList.map((criminal) => (
                <WantedBox
                key={criminal.name}
                {...criminal} 
                criminalAge={criminal.age}
                criminalDuration={criminal.duration}
                criminalName={criminal.name}
                crime={criminal.description}
                img={criminal.img}
                City={criminal.city}
                Sex={criminal.sex}
                DOB={criminal.dob}
                Committed={criminal.commited}
                Height={criminal.height}
                />

                 
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WantedListModal;
