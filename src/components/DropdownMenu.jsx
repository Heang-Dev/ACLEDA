import React, { useState } from "react";
import { BsBank } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// Reusable DropdownMenu Component
const DropdownMenu = ({ title, items, Icon, hasDropdown }) => {
  const [isDrop, setIsDrop] = useState(false);

  const handleDropMenu = () => {
    setIsDrop(!isDrop);
  };

  return (
    <div className="flex flex-col">
      {/* Dropdown Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 mobile-menu">
          <Icon size={20} />
          <a href="#">{title}</a>
        </div>

        {/* Conditionally Render the Dropdown Button */}
        {hasDropdown && (
          <div
            onClick={handleDropMenu}
            className={`transform transition-transform duration-500 ease-in-out ${
              isDrop ? "rotate-180" : "rotate-0"
            }`}
          >
            <MdOutlineKeyboardArrowDown size={20} />
          </div>
        )}
      </div>

      {/* Dropdown Items */}
      {hasDropdown && (
        <div
          className={`transition-all duration-300 ease-in overflow-hidden ${
            isDrop ? "max-h-full" : "max-h-0"
          }`}
        >
          {items.map((item, index) => (
            <a key={index} href={item.link} className="block p-2 drop-menu">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
