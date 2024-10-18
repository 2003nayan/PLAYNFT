import React, { useState, useEffect } from "react";

interface AuctionProps {
  endTime: string;
  highestBid: number;
}

const AuctionCard: React.FC<AuctionProps> = ({ endTime, highestBid }) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  const calculateTimeLeft = () => {
    const end = new Date(endTime).getTime();
    const now = new Date().getTime();
    const difference = end - now;

    let timeRemaining = "";
    if (difference > 0) {
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      timeRemaining = `${hours}h ${minutes}m ${seconds}s`;
    } else {
      timeRemaining = "Auction ended";
    }

    setTimeLeft(timeRemaining);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[40rem]">
      <img
        src="/hero_element_face.png"
        alt="Auction Item"
        className="w-full h-full object-cover rounded-3xl"
      />
      <div className="absolute inset-0 rounded-3xl flex flex-col justify-end text-white">
        <div className="w-100% h-[10rem] rounded-b-3xl flex justify-evenly gap-36 bg-gradient-to-r from-purple-700/75 to-blue-500/75">
          <div className="flex flex-col items-start justify-center gap-4 ">
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-calibri">Ending in:</span>
              <span className="text-3xl font-arial font-semibold">
                {timeLeft}
              </span>
            </div>
            <span className="bg-custom-gradient rounded-xl py-1 text-xl w-[100%] flex justify-center items-center font-bold">
              Place a bid
            </span>
          </div>
          <div className="flex flex-col items-end justify-center gap-4 ">
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-calibri">Highest Bid</span>
              <span className="text-3xl font-arial font-semibold">
                {highestBid} ETH
              </span>
            </div>
            <span className="bg-custom-gradient rounded-xl py-1 text-xl w-[100%] flex justify-center items-center">
              Purchase
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
