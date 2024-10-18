import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [underlineStyle, setUnderlineStyle] = useState<React.CSSProperties>({});
  const menuItems: string[] = [
    "Home",
    "Explore",
    "Marketplace",
    "Artists",
    "News",
  ];
  const navRef = useRef<HTMLDivElement>(null);

  // Update underline position on item click
  useEffect(() => {
    if (navRef.current) {
      const activeItem = navRef.current.children[
        activeIndex
      ] as HTMLSpanElement;
      if (activeItem) {
        const itemWidth = activeItem.offsetWidth;
        const itemLeft = activeItem.offsetLeft;
        setUnderlineStyle({
          width: `${itemWidth}px`,
          left: `${itemLeft}px`,
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="bg-gray-800 h-32 flex justify-evenly items-center">
      {/* PLAY-NFT Logo (GOOD-TO-GO)*/}
      <div className="flex font-bold font-copperplate text-2xl leading-[26.4px]">
        <span className="text-4xl p-2 text-white tracking-wide">PLAY</span>
        <span className="text-4xl p-2 bg-custom-gradient text-white tracking-widest">
          NFT
        </span>
      </div>
      {/* Navbar Items (GOOD-TO-Go)*/}
      <div className="relative">
        {/* Menu Items */}
        <div
          ref={navRef}
          className="flex justify-center gap-16 text-4xl text-white font-calibri"
        >
          {menuItems.map((item, index) => (
            <span
              key={index}
              className={`cursor-pointer ${
                activeIndex === index ? "font-bold" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Animated Underline */}
        <div
          className="absolute bottom-[-7px] h-[2px] bg-custom-gradient transition-all duration-500"
          style={{
            width: underlineStyle.width,
            left: underlineStyle.left,
          }}
        />
      </div>
      {/* Search & Register */}
      <div className="flex gap-8">
        <div className="p-1 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500">
          <div className="flex flex-row justify-start gap-4 items-center text-3xl font-semibold w-56 py-3 px-5 rounded-2xl bg-gray-800">
            <FaSearch className="text-white w-6 h-6 " />
            <span className="text-white">Search</span>
          </div>
        </div>

        <div className="text-3xl text-white font-semibold bg-custom-gradient flex justify-center items-center px-8 py-3 rounded-2xl">
          Register
        </div>
      </div>
    </div>
  );
};

export default Navbar;
