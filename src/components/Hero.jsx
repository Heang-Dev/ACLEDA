import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const slides = [
  "/Images/slide-1.png",
  "/Images/slide-2.png",
  "/Images/slide-3.png",
  "/Images/slide-4.png",
  "/Images/slide-5.png",
];

const menuIcon = [
  {
    title: "PROXTERA TRADE PORTAL",
    url: "/icons/trade.png",
  },
  {
    title: "SPECIAL OFFERS",
    url: "/icons/special-offer.png",
  },
  {
    title: "LATEST NEWS",
    url: "/icons/news.png",
  },
  {
    title: "PRODUCTS UPDATES",
    url: "/icons/products-update.png",
  },
  {
    title: "DEPOSIT",
    url: "/icons/deposit.png",
  },
  {
    title: "CREDIT",
    url: "/icons/credit.png",
  },
  {
    title: "CONTACT US",
    url: "/icons/contact-us.png",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));

  const next = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  const gotoSlide = (slideIndex) => setCurrent(slideIndex);

  return (
    <section className="xl:mt-48 mt-[130px] bg-primary">
      {/* SLIDE */}
      <div className="w-full px-0 md:px-[9%] xl:px-[12.1%] bg-lightGray flex items-center gap-0 relative drop-shadow-custom-dark-2">
        <div onClick={prev} className="absolute left-0 xl:left-4 slide-btn">
          <FaAngleLeft size={30} />
        </div>
        <div
          style={{ backgroundImage: `url(${slides[current]})` }}
          className="relative flex w-full h-[250px] xl:h-[420px] duration-500 bg-center bg-cover"
        >
          <div className="absolute left-0 right-0 bottom-2 xl:bottom-4">
            <div className="flex items-center justify-center gap-3">
              {slides.map((_, index) => (
                <div
                  key={index}
                  onClick={() => gotoSlide(index)}
                  className={`transition-all w-3 h-3 border border-black rounded-full ${
                    current === index ? "bg-black" : "bg-transparent"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div onClick={next} className="absolute right-0 xl:right-4 slide-btn">
          <FaAngleRight size={30} />
        </div>
      </div>
      {/* MENU */}
      <div className="flex items-center justify-start gap-10 px-8 py-12 md:gap-16 xl:p-20 xl:justify-center">
        {menuIcon.map((menu, index) => (
          <div key={index} className="menu-container">
            <img
              src={menu.url}
              alt={menu.title}
              className="mb-5 w-7 h-7 md:w-8 md:h-8 xl:w-10 xl:h-10"
            />
            <p className="menu-text text-[12px] whitespace-nowrap">
              {menu.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
