import React, { useEffect, useState } from "react";
import { FaTag, FaUser, FaChartLine } from "react-icons/fa"; // Ensure correct import
import {
  IoMdSearch,
  IoMdTimer,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { CiCreditCard2 } from "react-icons/ci";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import FlyoutLink from "./FlyoutLink";
import {
  IoClose,
  IoMenu,
  IoFingerPrint,
  IoCloudDownloadSharp,
} from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { BsBank } from "react-icons/bs";
import DropdownMenu from "./DropDownMenu";

const NavMenu = [
  {
    title: "Special Offers",
    icon: <FaTag />,
    href: "#",
    classes: "",
    flyoutContent: null, // No dropdown
  },
  {
    title: "About ACLEDA",
    icon: <MdOutlineKeyboardArrowDown />,
    href: "#",
    classes: "",
    flyoutContent: () => (
      <>
        <div className="menu-right">
          <a href="#">Financial Information</a>
          <a href="#">Bank Profile</a>
          <a href="#">Media</a>
          <a href="#">Career</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="menu-right">
          <a href="#">Download</a>
          <a href="#">Information</a>
        </div>
      </>
    ),
  },
  {
    title: "Search",
    icon: <IoMdSearch />,
    href: "#",
    classes: "",
    flyoutContent: null, // No dropdown
  },
  {
    title: "Internet Banking",
    icon: <MdOutlineKeyboardArrowDown />,
    href: "#",
    classes: "active",
    flyoutContent: () => (
      <>
        <div className="menu-right">
          <a href="#">Retail Banking</a>
          <a href="#">Corporate Banking</a>
        </div>
      </>
    ),
  },
];

const Menu = [
  {
    title: "Personal",
    icon: <MdOutlineKeyboardArrowDown />,
    href: "#",
    classes: "",
    flyoutContent: () => (
      <>
        <div className="menu-left">
          <a href="#">Credits</a>
          <a href="#">Deposit</a>
          <a href="#">Cash Management</a>
          <a href="#">Funds Transfers</a>
          <a href="#">Trade Finance</a>
          <a href="#">Securities & Trust Service</a>
          <a href="#">Corporate Agent Lift Insurance Service</a>
          <a href="#">Financial Health Check</a>
        </div>
      </>
    ),
  },
  {
    title: "Business",
    icon: <MdOutlineKeyboardArrowDown />,
    href: "#",
    classes: "",
    flyoutContent: () => (
      <>
        <div className="menu-left">
          <a href="#">Credits</a>
          <a href="#">Deposit</a>
          <a href="#">Cash Management</a>
          <a href="#">Funds Transfers</a>
          <a href="#">Trade Finance</a>
          <a href="#">Securities & Trust Service</a>
          <a href="#">Financial Health Check</a>
          <a href="#">International Financial Services - Proxtera</a>
        </div>
      </>
    ),
  },
  {
    title: "Cards",
    icon: <MdOutlineKeyboardArrowDown />,
    href: "#",
    classes: "",
    flyoutContent: () => (
      <>
        <div className="menu-left">
          <a href="#">Consumer Card</a>
          <a href="#">ACLEDA Card</a>
          <a href="#">VISA Debit/Credit Card</a>
          <a href="#">Mastercard Debit/Credit Card</a>
          <a href="#">Mastercard Lady Debit/Credit Card</a>
          <a href="#">JCB Debit Card</a>
          <a href="#">UPI Debit Card</a>
        </div>
      </>
    ),
  },
  {
    title: "Digital",
    icon: <MdOutlineKeyboardArrowDown />,
    href: "#",
    classes: "",
    flyoutContent: () => (
      <>
        <div className="menu-left">
          <a href="#">ACLEDA mobile</a>
          <a href="#">ACLEDA Internet Banking</a>
          <a href="#">ACLEDA E-Commerce</a>
          <a href="#">ACLEDA ATM</a>
          <a href="#">ACLEDA POS</a>
          <a href="#">Term Deposit Machine</a>
          <a href="#">Virtual Teller Machine</a>
          <a href="#">PayBand</a>
          <a href="#">SmartPay</a>
          <a href="#">Virtual Card</a>
          <a href="#">Top Up Service</a>
          <a href="#">Bill Payment</a>
          <a href="#">Banking Service Order via E-mail/Fax</a>
          <a href="#">Message Alert on Account Information</a>
        </div>
      </>
    ),
  },
  {
    title: "Investor Relations",
    icon: null,
    href: "#",
    classes: "",
    flyoutContent: null,
  },
];

const dropdowns_1 = [
  {
    title: "Retail Internet Banking",
    icon: TbWorld,
    hasDropdown: false,
    items: [],
  },
];

const dropdowns_2 = [
  {
    title: "Search",
    icon: IoMdSearch,
    hasDropdown: false,
    items: [],
  },
  {
    title: "Special Offers",
    icon: FaTag,
    hasDropdown: false,
    items: [],
  },
  {
    title: "About ACLEDA",
    icon: BsBank,
    hasDropdown: true,
    items: [
      { label: "Financial Information", link: "#" },
      { label: "Bank Profile", link: "#" },
      { label: "Media", link: "#" },
      { label: "Career", link: "#" },
      { label: "Contact Us", link: "#" },
    ],
  },
];

const dropdowns_3 = [
  {
    title: "Personal",
    icon: FaUser,
    hasDropdown: true,
    items: [
      { label: "Credits", link: "#" },
      { label: "Deposit", link: "#" },
      { label: "Cash Management", link: "#" },
      { label: "Funds Transfers", link: "#" },
      { label: "Trade Finance", link: "#" },
      { label: "Securities & Trust Service", link: "#" },
      { label: "Corporate Agent Lift Insurance Service", link: "#" },
      { label: "Financial Health Check", link: "#" },
    ],
  },
  {
    title: "Business",
    icon: BiBuildings,
    hasDropdown: true,
    items: [
      { label: "Credits", link: "#" },
      { label: "Deposit", link: "#" },
      { label: "Cash Management", link: "#" },
      { label: "Funds Transfers", link: "#" },
      { label: "Trade Finance", link: "#" },
      { label: "Securities & Trust Service", link: "#" },
      { label: "Financial Health Check", link: "#" },
      { label: "International Financial Services - Proxtera", link: "#" },
    ],
  },
  {
    title: "Cards",
    icon: CiCreditCard2,
    hasDropdown: true,
    items: [
      { label: "Consumer Card", link: "#" },
      { label: "ACLEDA Card", link: "#" },
      { label: "VISA Debit/Credit Card", link: "#" },
      { label: "Mastercard Debit/Credit Card", link: "#" },
      { label: "Mastercard Lady Debit/Credit Card", link: "#" },
      { label: "JCB Debit Card", link: "#" },
      { label: "UPI Debit Card", link: "#" },
    ],
  },
  {
    title: "Digital",
    icon: IoFingerPrint,
    hasDropdown: true,
    items: [
      { label: "ACLEDA mobile", link: "#" },
      { label: "ACLEDA Internet Banking", link: "#" },
      { label: "ACLEDA E-Commerce", link: "#" },
      { label: "ACLEDA ATM", link: "#" },
      { label: "ACLEDA POS", link: "#" },
      { label: "Term Deposit Machine", link: "#" },
      { label: "Virtual Teller Machine", link: "#" },
      { label: "PayBand", link: "#" },
      { label: "SmartPay", link: "#" },
      { label: "Virtual Card", link: "#" },
      { label: "Top Up Service", link: "#" },
      { label: "Bill Payment", link: "#" },
      { label: "Banking Service Order via E-mail/Fax", link: "#" },
      { label: "Message Alert on Account Information", link: "#" },
    ],
  },
  {
    title: "Products & Service Update",
    icon: IoMdTimer,
    hasDropdown: false,
    items: [],
  },
];

const dropdowns_4 = [
  {
    title: "Investor Relations",
    icon: FaChartLine,
    hasDropdown: false,
    items: [],
  },
  {
    title: "Download",
    icon: IoCloudDownloadSharp,
    hasDropdown: false,
    items: [],
  },
  {
    title: "Information",
    icon: IoMdInformationCircleOutline,
    hasDropdown: false,
    items: [],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDrop, setIsDrop] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropMenu = () => {
    setIsDrop(!isDrop);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Current scroll position
      const viewportHeight = window.innerHeight; // Full viewport height
      // Can change value of condition
      if (scrollPosition > 400) {
        setIsScrolled(true); // Scrolled 50% of viewport
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-10 w-full text-white border-b border-white bg-secondary drop-shadow-custom-dark-3 transition-all duration-300 ${
          isScrolled ? "xl:h-36 h-[105px]" : "xl:h-48 h-[130px]"
        }`}
      >
        <div
          className={`px-[11.5%] bg-primary drop-shadow-custom-dark-1 border-b border-darkGray flex items-center relative justify-center xl:justify-between z-30 transition-all duration-300 ${
            isScrolled ? "xl:h-[80px] h-[60px]" : "xl:h-32 h-[85px]"
          }`}
        >
          <div
            className="absolute block xl:hidden top-[50%] left-5 -translate-y-[50%] text-lightGray"
            onClick={handleOpenMenu}
          >
            <IoMenu size={25} />
          </div>
          {/* Logo Section */}
          <div className="flex items-center justify-center h-full">
            <img src="/Images/logo.png" alt="logo" className="h-[50%]" />
          </div>

          {/* Navigation Menu */}
          <div className="items-center hidden space-x-4 xl:flex">
            <div className="flex gap-2">
              {NavMenu.map((item, index) => (
                <FlyoutLink
                  key={index}
                  href={item.href}
                  flyoutContent={item.flyoutContent}
                  className="flex items-center px-1 py-4"
                  classes="right-0"
                >
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center px-1 py-4 transition-colors hover:bg-secondary group"
                  >
                    <span
                      className={`text-[10px] uppercase font-bold font-arial tracking-widest flex items-center ${item.classes}`}
                    >
                      {item.title}
                      <span
                        className={`px-1 text-sm transform transition-transform duration-300 origin-center ${
                          item.flyoutContent ? "group-hover:rotate-180" : ""
                        }`}
                      >
                        {item.icon}
                      </span>
                    </span>
                  </a>
                </FlyoutLink>
              ))}
            </div>
            <div className="px-3 py-4 cursor-pointer hover:bg-secondary">
              <img
                src="/Images/cam-flag.png"
                alt="flag"
                className="border border-white rounded-sm w-7"
              />
            </div>
          </div>
        </div>
        <div className="xl:px-[11.5%] px-[3%] xl:h-16 h-[40px] bg-transparent flex items-center justify-start xl:justify-between z-10">
          <div className="items-center hidden space-x-4 xl:flex">
            <div className="flex gap-1">
              {Menu.map((item, index) => (
                <FlyoutLink
                  key={index}
                  href={item.href}
                  flyoutContent={item.flyoutContent}
                  className="flex items-center px-3 py-4"
                  classes="left-0"
                >
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center px-3 py-4 group"
                  >
                    <span
                      className={`menu-text hover:text-yPrimary py-[6px] ${item.classes}`}
                    >
                      {item.title}
                      <span
                        className={`px-1 text-sm transform transition-transform duration-300 origin-center ${
                          item.flyoutContent ? "group-hover:rotate-180" : ""
                        }`}
                      >
                        {item.icon}
                      </span>
                    </span>
                  </a>
                </FlyoutLink>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between space-x-10 cursor-pointer">
            <div className="">
              <p className="font-arial text-[10px] uppercase">Exchange</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <img src="/Images/thai-flag.png" alt="flag" className="w-5" />
                <span className="font-arial text-[10px]">THB</span>
              </div>
              <div className="flex gap-4">
                <p className="change-rate">
                  116.59 <MdArrowDropDown className="text-red-500" size={20} />
                </p>
                <p className="change-rate">
                  116.59 <MdArrowDropUp className="text-green-500" size={20} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full bg-primary z-50 text-white transition-all duration-200 ease-in overflow-hidden ${
          isOpen ? "w-[85%] px-5" : "w-0"
        }`}
      >
        <div className="flex items-center justify-between w-full line-b">
          <div className="flex gap-3 py-2">
            <img
              src="/Images/cam-flag.png"
              alt="flag"
              className="border border-white rounded-sm w-7"
            />
            <p className="font-khmer">ភាសាខ្មែរ</p>
          </div>
          <div className="" onClick={handleOpenMenu}>
            <IoClose size={40} />
          </div>
        </div>
        <div className="line-b">
          {dropdowns_1.map((dropdown, index) => (
            <DropdownMenu
              key={index}
              title={dropdown.title}
              items={dropdown.items}
              Icon={dropdown.icon}
              hasDropdown={dropdown.hasDropdown}
            />
          ))}
        </div>
        <div className="line-b">
          {dropdowns_2.map((dropdown, index) => (
            <DropdownMenu
              key={index}
              title={dropdown.title}
              items={dropdown.items}
              Icon={dropdown.icon}
              hasDropdown={dropdown.hasDropdown}
            />
          ))}
        </div>
        <div className="line-b">
          {dropdowns_3.map((dropdown, index) => (
            <DropdownMenu
              key={index}
              title={dropdown.title}
              items={dropdown.items}
              Icon={dropdown.icon}
              hasDropdown={dropdown.hasDropdown}
            />
          ))}
        </div>
        <div className="line-b">
          {dropdowns_4.map((dropdown, index) => (
            <DropdownMenu
              key={index}
              title={dropdown.title}
              items={dropdown.items}
              Icon={dropdown.icon}
              hasDropdown={dropdown.hasDropdown}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
