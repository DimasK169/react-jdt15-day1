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
        {toggle ? <CloseIcon /> : <MenuOpenIcon /> }</button>
    </div>
  );
};

export default Header;
