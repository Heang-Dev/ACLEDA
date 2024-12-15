import { useState } from "react";

const FlyoutLink = ({ children, href, flyoutContent, classes }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open && flyoutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <a href={href} className="relative text-white">
        {children}
      </a>
      {flyoutContent && (
        <div
          className={`absolute ${classes} top-full overflow-hidden transition-[max-height] duration-300 ease-in ${
            open ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          {flyoutContent()}
        </div>
      )}
    </div>
  );
};

export default FlyoutLink;
