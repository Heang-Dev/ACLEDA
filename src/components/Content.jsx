import React from "react";
import { DiVim } from "react-icons/di";

const ContentMenu = [
  {
    img: "/Images/topic-1.png",
    text: "Memorandum of Understanding Signing Ceremony between Ministry of Commerce and ACLEDA Bank Plc. on Usage of E-Payment Services on CambodiaTrade",
  },
  {
    img: "/Images/topic-2.png",
    text: "ACLEDA Bank Plc. Successfully Certified by ISO/IEC 27001:2022 and ISO/IEC 27701:2019",
  },
  {
    img: "/Images/topic-3.png",
    text: "READ MORE",
  },
  {
    img: "/Images/topic-4.png",
    text: "READ MORE",
  },
  {
    img: "/Images/topic-5.png",
    text: "READ MORE",
  },
  {
    img: "/Images/topic-6.png",
    text: "READ MORE",
  },
  {
    img: "/Images/topic-7.png",
    text: "READ MORE",
  },
  {
    img: "/Images/topic-8.png",
    text: "READ MORE",
  },
  {
    img: "/Images/topic-9.png",
    text: "READ MORE",
  },
  {
    img: "/Images/topic-10.png",
    text: "READ MORE",
  },
  {
    img: "/Images/topic-11.png",
    text: "READ MORE",
  },
  {
    img: "/Images/topic-12.png",
    text: "READ MORE",
  },
  {
    img: "/Images/topic-13.png",
    text: "READ MORE",
  },
  {
    img: "/Images/topic-14.png",
    text: "READ MORE",
  },
  {
    img: "/Images/topic-15.png",
    text: "READ MORE",
  },
  {
    img: "/Images/topic-16.png",
    text: "READ MORE",
  },
];

const Content = () => {
  return (
    <section className="xl:px-[11.5%] lg:px-[8%] px-[3%] py-10 grid grid-cols-2 md:gap-5 xl:gap-14">
      {ContentMenu.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-between px-2 py-5 bg-white cursor-pointer"
        >
          <div className="w-full">
            <img
              src={item.img}
              alt=""
              className="object-cover object-center rounded-md"
            />
            <div class="text-center mx-auto text-[12px] font-roboto mt-2 text-blue-600 hover:text-darkGray hover:underline">
              <a className="">{item.text}</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Content;
