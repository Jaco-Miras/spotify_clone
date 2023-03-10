import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { FaSpotify } from "react-icons/fa";

import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-gray-600"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[250px] py-10 px-4 bg-[#191624]">
        {/* <img src={logo} alt="logo" className="w-full h-14 object-contain " /> */}
        <div className="flex">
          <FaSpotify className="w-20 h-14 text-white" />
          <h2 className="text-center font-poppins text-3xl font-semibold text-white mt-3">
            SPOTIFY
          </h2>
        </div>
        <NavLinks />
      </div>

      {/* Mobile Responsiveness */}
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#08570f] backdrop-blur-md z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        {/* <img src={logo} alt="logo" className="w-full h-14 object-contain " /> */}
        <div className="flex">
          <FaSpotify className="w-20 h-14 text-white" />
          <h2 className="text-center font-poppins text-3xl font-semibold text-white mt-3">
            SPOTIFY
          </h2>
        </div>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
