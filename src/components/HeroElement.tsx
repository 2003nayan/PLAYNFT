import { BsCameraVideoFill } from "react-icons/bs";
import AuctionCard from "./AuctionCard";

const HeroElement = () => {
  const profileImages = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/men/7.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/4.jpg",
    "https://randomuser.me/api/portraits/women/11.jpg",
  ];

  return (
    <div className="flex flex-row justify-evenly bg-gray-800 mt-16">
      <div className="flex justify-center items-start flex-col">
        {/* Discover, Collect.... & The world's largest.... */}
        <div className="flex items-start flex-col w-[50vw] gap-10">
          <span className="font-copperplate text-[90px] text-white font-bold leading-[6rem]">
            Discover, Collect and Sell Dope Art and NFTs
          </span>
          <span className="text-4xl text-white font-medium font-calibri w-[80%]">
            The world's largest digital marketplace for crypto collections and
            non fungible tokens (NFTs)
          </span>
        </div>

        {/* Discover btn, Create btn, and Watch a video btn */}
        <div className="flex justify-between w-[80%] mt-16">
          <div className="flex gap-10">
            <div className="text-3xl text-white font-bold bg-custom-gradient flex justify-center items-center px-14 py-4 rounded-3xl">
              Discover
            </div>
            <div className="p-1 rounded-2xl bg-custom-gradient">
              <div className="flex flex-row justify-center gap-4 items-center text-3xl font-semibold px-14 py-3 rounded-xl bg-gray-800">
                <span className="text-white">Create</span>
              </div>
            </div>
          </div>
          <span className="underline text-white text-2xl flex justify-center items-center gap-3 font-calibri">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#9333ea", stopOpacity: 1 }}
                  />{" "}
                  {/* purple-600 */}
                  <stop
                    offset="100%"
                    style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
                  />{" "}
                  {/* blue-500 */}
                </linearGradient>
              </defs>
              <BsCameraVideoFill
                fill="url(#gradient2)"
                className="w-full h-full"
              />
            </svg>
            Watch a video
          </span>
        </div>

        {/* Art works, Auctions, Artists stats */}
        <div className="w-[80%] text-white flex flex-row justify-between text-5xl px-8 py-3 mt-16 border-2 rounded-2xl bg-custom-gradient">
          <div className="flex flex-col justify-center items-center">
            <span className="font-copperplate font-bold">27k +</span>
            <span className="font-calibri">Art Works</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-copperplate font-bold">20k +</span>
            <span className="font-calibri">Auctions</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-copperplate font-bold">7k +</span>
            <span className="font-calibri">Artists</span>
          </div>
        </div>

        {/* Profiles &  Active users stats */}
        <div className="flex items-center justify-between w-[80%] mt-12">
          <div className="relative flex">
            {profileImages.map((image, index) => (
              <div
                key={index}
                className="w-32 h-32 rounded-full border-2 border-transparent bg-custom-gradient p-1 transform transition-transform duration-300 hover:scale-110"
                style={{ marginLeft: index === 0 ? "0" : "-45px" }}
              >
                <img
                  src={image}
                  alt={`Profile ${index + 1}`}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="w-[100%] h-[100%] flex flex-col text-5xl justify-center items-center text-white">
            <span className="font-copperplate font-bold">40K +</span>
            <span className="font-calibri">Active Users</span>
          </div>
        </div>
      </div>

      {/* Image div */}
      <AuctionCard endTime="2024-10-15T12:00:00Z" highestBid={32.4} />
    </div>
  );
};

export default HeroElement;
