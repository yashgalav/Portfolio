import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { darkAtom } from "../store/atoms/DarkAtom";
import Button from "./Button";
import {textColor } from "../store/atoms/CustomColor";

const NavLink = ({ className }) => {
  const textHoverColor = useRecoilValue(textColor);

  return (
    <div className={` ${className} flex-wrap `}>
      <Link to="/" className={`hover:${textHoverColor} hover:font-bold`}>Home</Link>
      <Link to="/about" className={`hover:${textHoverColor} hover:font-bold`}>About</Link>
      <Link to="/services" className={`hover:${textHoverColor} hover:font-bold`}>Services</Link>
      <Link to="/work" className={`hover:${textHoverColor} hover:font-bold`}>Work</Link>
      <Link to="/contact" className={`hover:${textHoverColor} hover:font-bold`}>Contact</Link>
    </div>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useRecoilState(darkAtom);
  const customTextColor = useRecoilValue(textColor);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`flex justify-center shadow-lg mx-auto px-6 py-4 ${darkMode ? "bg-gray-900":"bg-slate-300 "}`}>
      <div className="container flex justify-between w-screen ">
        
        <div className="flex items-center ">
          <h1 className="text-2xl font-bold">
            Yash<span className={`${customTextColor} font-extrabold`}>.</span>
          </h1>
        </div>

        <div className="flex items-center space-x-8">
          {/* Desktop Links */}
          <div className="hidden md:flex">
            <NavLink className={"flex items-center space-x-8"} />
          </div>

          {/* Dark Mode Toggle */}
          <Button
            onClick={toggleDarkMode}
            trueIcon={<Sun size={20} />}
            falseIcon={<Moon size={20} />}
            isOpen={darkMode}
          />

          {/* Mobile Menu Button */}
          <div className="relative md:hidden bg-slate-200">

            <Button
              onClick={toggleIsOpen}
              isOpen={isOpen}
              trueIcon={<X />}
              falseIcon={<Menu />}
            />

            {/* Mobile Links Dropdown */}
            {(isOpen &&
              <div className={`absolute right-0 top-full mt-2 ${darkMode ? `bg-gray-800` : `bg-white`} shadow-md rounded-lg p-4 z-50`}>
                <NavLink className="flex flex-col gap-4" />
              </div>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
