import React from "react";

const AboutMenu = [
  {
    img: "/Images/logo-university.png",
    hightLight: "ACLEDA University of Business Co., Ltd.",
    text: ", a wholly-owned subsidiary of ACLEDA Bank Plc., is to be the leading business school with the highest quality standard to develop future generations to support the socio-economic development in Cambodia and the Region.",
  },
  {
    img: "/Images/logo-security.png",
    hightLight: "ACLEDA Securities Plc.",
    text: "is a wholly-owned subsidiary of ACLEDA Bank Plc. and providing services as a Securities Brokerage, Securities Selling Agent and Bondholders Representative to individual and institutional customers, investors and the public.",
  },
  {
    img: "/Images/logo-bank.png",
    hightLight: "ACLEDA Bank Lao Ltd.",
    text: "is one of ACLEDA Bank Plc.'s subsidiaries and providing superior financial services in the Lao PDR (37 branches).",
  },
  {
    img: "/Images/logo-mfi.png",
    hightLight: "ACLEDA MFI Myanmar Co., Ltd.",
    text: "is one of ACLEDA Bank Plc.'s subsidiaries and operating as a microfinance institution in the Republic of the Union of Myanmar (17 branches).",
  },
];

const About = () => {
  return (
    <div className="flex xl:grid xl:grid-cols-4 gap-[2px] overflow-x-auto">
      {AboutMenu.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 flex flex-col items-center gap-8 px-4 py-6 bg-lightGray xl:w-full sm:w-[50%] w-[75%] md:w-[33%]"
        >
          <img src={item.img} alt={item.hightLight} className="w-[55%]" />
          <div className="text-left">
            <p>
              <span>
                <a
                  href="#"
                  className="font-bold text-blue-600 font-roboto text-[12px] hover:text-darkGray hover:underline"
                >
                  {item.hightLight}
                </a>
              </span>
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
