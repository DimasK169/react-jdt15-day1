import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import RocketIcon from '@mui/icons-material/Rocket';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';

const navData = [
  {
    route: "/home",
    label: "Home",
    icon: <HomeIcon />
  },
  {
    route: "/hobbies",
    label: "Hobbies",
    icon: <RocketIcon />
  },
  {
    route: "/Contact",
    label: "Contact",
    icon: <EmailIcon />
  },
];

const Header: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex flex-row justify-between py-5 px-10 shadow bg-green-400">
      <h2 className="text-black">
        Robert Gaming
      </h2>
      <nav className="hidden md:flex gap-10">
        {navData.map((item) => (
          <a
            key={item.route}
            className="hover:text-blue-400 hover:underline"
            href={item.route}
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </nav>
      <button onClick={() =>setToggle((prev: boolean) => !prev)}  className="flex md:hidden">
        {toggle ? <CloseIcon /> : <MenuOpenIcon/> }</button>
        <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 transition-transform transform ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={() => setToggle((prev: boolean) => !prev)}
          className="flex md:hidden"
        >
          {toggle ? "close" : "open"}
        </button>
        {navData.map((item) => (
          <a
            key={item.route}
            className="hover:text-blue-400 hover:underline"
            href={item.route}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
