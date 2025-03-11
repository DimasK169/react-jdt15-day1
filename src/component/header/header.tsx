import React, { useState } from "react";

const navData = [
  {
    route: "/home",
    label: "Home",
  },
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/Contact",
    label: "Contact",
  },
];

const Header: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex flex-row justify-between py-5 px-10 shadow">
      <h2 className="text-green-400">
        <span className="text-red-600">Website-</span>ku
      </h2>
      <nav className="hidden md:flex gap-10">
        {navData.map((item) => (
          <a
            key={item.route}
            className="hover:text-blue-400 hover:underline"
            href={item.route}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <button onClick={() =>setToggle((prev: boolean) => !prev)}  className="flex md:hidden">
        {toggle ? "Close" : "Open"}</button>
    </div>
  );
};

export default Header;
