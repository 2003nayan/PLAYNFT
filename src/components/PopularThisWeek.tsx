import { useEffect, useState } from "react";
import PopularThisWeekCard from "./PopularThisWeekCard";

const PopularThisWeek = () => {
  const [currentZoomIndex, setCurrentZoomIndex] = useState(0);

  const cards = [
    {
      image: "/Card2.jpg",
      title: "VERSACE",
      creator: "by Antoni Tudisco",
      price: 2.45,
      likes: 48,
    },
    {
      image: "/Card3.jpg",
      title: "Giorgio",
      creator: "by Satoshi Nakamoto",
      price: 1.11,
      likes: 78,
    },
    {
      image: "/Card1.jpg",
      title: "Digital Decade",
      creator: "By Anthony gragasz",
      price: 2.45,
      likes: 50,
    },
    {
      image: "/Card4.jpg",
      title: "Winter Jamz",
      creator: "By Antino Tudisco",
      price: 2.3,
      likes: 47,
    },
    {
      image: "/Card5.jpg",
      title: "Pastel Wifey",
      creator: "By Blake Kathryn",
      price: 2.23,
      likes: 44,
    },
    {
      image: "/Card6.jpg",
      title: "Bling Bits",
      creator: "By Donald Biden",
      price: 2.57,
      likes: 52,
    },
    {
      image: "/Card7.jpg",
      title: "Mike Hallo",
      creator: "By Jake Tyson",
      price: 1.99,
      likes: 61,
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentZoomIndex((prevIndex) => (prevIndex + 1) % cards.length);
      const container = document.getElementById("scrollable-container");
      if (container) {
        container.scrollBy({
          left: 450,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [cards.length]);

  return (
    <div className="flex justify-center items-center mt-20 flex-col">
      <span className="text-6xl font-extrabold font-copperplate text-white">
        Popular This Week
      </span>
      <div
        id="scrollable-container"
        className="my-20 flex gap-16 flex-wrap overflow-x-scroll"
      >
        {cards.map((card, index) => (
          <PopularThisWeekCard
            key={index}
            image={card.image}
            title={card.title}
            creator={card.creator}
            price={card.price}
            likes={card.likes}
            isZoomed={index === currentZoomIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularThisWeek;
