import React from "react";

const FooterMenu = [
  {
    title: "Site Map",
    link: "#",
  },
  {
    title: "Form Center",
    link: "#",
  },
  {
    title: "User Manual",
    link: "#",
  },
  {
    title: "Security Tips",
    link: "#",
  },
  {
    title: "Newsletter",
    link: "#",
  },
  {
    title: "Legal and Privacy Notice",
    link: "#",
  },
];

const FooterMenu_1 = [
  {
    title: "Online Visitor : 1,074",
    link: "#",
  },
  {
    title: "© 2024, ACLEDA Bank Plc.",
    link: "#",
  },
];

const Footer_Img = [
  {
    img: "/Images/footer-1.png",
    link: "#",
  },
  {
    img: "/Images/footer-2.png",
    link: "#",
  },
  {
    img: "/Images/footer-3.png",
    link: "#",
  },
];

const Footer_Social = [
  {
    img: "/icons/coolapp.png",
    link: "#",
  },
  {
    img: "/icons/snapkyu.png",
    link: "#",
  },
  {
    img: "/icons/facebook.png",
    link: "#",
  },
  {
    img: "/icons/messager.png",
    link: "#",
  },
  {
    img: "/icons/telegram.png",
    link: "#",
  },
  {
    img: "/icons/tiktok.png",
    link: "#",
  },
  {
    img: "/icons/youtube.png",
    link: "#",
  },
  {
    img: "/icons/instagram.png",
    link: "#",
  },
  {
    img: "/icons/linkedin.png",
    link: "#",
  },
  {
    img: "/icons/line.png",
    link: "#",
  },
  {
    img: "/icons/wechat.png",
    link: "#",
  },
  {
    img: "/icons/whatsapp.png",
    link: "#",
  },
  {
    img: "/icons/x.png",
    link: "#",
  },
  {
    img: "/icons/viber.png",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-primary">
      <div className="flex-wrap footer-menu-container">
        {FooterMenu.map((item, index) => (
          <div key={index} className="footer-menu">
            <a href={item.link}>{item.title}</a>
          </div>
        ))}
      </div>
      <div className="footer-menu-container">
        {FooterMenu_1.map((item, index) => (
          <div key={index} className="footer-menu">
            <a href={item.link}>{item.title}</a>
          </div>
        ))}
      </div>
      <div className="my-10 footer-menu">
        <p>😁👍 CHHUN MENGHEANG 😎👌</p>
      </div>
      <div className="flex-col footer-menu-container">
        <p className="footer-menu">ACLEDA Bank Plc. - Credentials</p>
        <div className="flex items-center justify-center gap-3">
          {Footer_Img.map((item, index) => (
            <div key={index} className="w-24 xl:w-36">
              <img src={item.img} alt="" className="w-full rounded-md" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-col footer-menu-container">
        <p className="mt-10 footer-menu">Connect With Us On</p>
        <div className="flex items-center justify-start w-full gap-3 overflow-x-auto">
          {Footer_Social.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-9 xl:w-10 hover:border-2 hover:border-white hover:rounded-full"
            >
              <img
                src={item.img}
                alt=""
                className="w-full transition-all duration-300 rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
