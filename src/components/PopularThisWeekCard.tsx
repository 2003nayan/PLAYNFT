import { FaHeart } from "react-icons/fa";

interface PopularThisWeekCardProps {
  image: string;
  title: string;
  creator: string;
  price: number;
  likes: number;
  isZoomed: boolean;
}

const PopularThisWeekCard: React.FC<PopularThisWeekCardProps> = ({
  image,
  title,
  creator,
  price,
  likes,
  isZoomed,
}) => {
  return (
    <div
      className={`flex overflow-hidden rounded-[40px] relative ${
        isZoomed ? "zoomed" : ""
      }`}
    >
      <img
        src={image}
        alt="Card Image"
        className="w-[450px] h-[627px] object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="w-100% h-[10rem] rounded-b-4xl flex flex-row bg-gradient-to-r from-purple-700/85 to-blue-400/85">
          <div className="flex flex-col w-[60%] h-[95%] justify-center items-center">
            <span className="font-copperplate text-white text-3xl font-bold">
              {title}
            </span>
            <span className="font-calibri text-white text-2xl">{creator}</span>
          </div>
          <div className="w-[40%] flex flex-col justify-center items-center gap-3">
            <div className="px-7 py-1 border-2 border-purple-700 rounded-2xl text-white text-2xl font-semibold">
              {price} ETH
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <FaHeart className="w-7 h-7 text-purple-800" />
              <span className="text-white font-semibold text-3xl my-auto">
                {likes}K
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularThisWeekCard;
