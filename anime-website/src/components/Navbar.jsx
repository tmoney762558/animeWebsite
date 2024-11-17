import React from "react";
import { useState, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";

// Navbar.jsx: Simple Navbar that holds a text input for searching as well as other site navigation

const Navbar = ({ onRecieveData, onChangeInput }) => {
  const [menuDropdown, setMenuDropdown] = useState("closed");
  const searchInputRef = useRef();

  return (
    <nav className="p-3 bg-neutral-900 border-b-[2px] border-neutral-800">
      <ul className="flex justify-between items-center">
        <li className="lg:flex hidden lg:flex-1 justify-start">
          <h2 className="text-2xl">AnimeHaven</h2>
        </li>
        <li className="flex lg:flex-1 justify-center">
          <div className="flex items-center w-full relative">
            <input
              className="w-full py-2 pl-3 bg-zinc-800 rounded-full text-zinc-400 outline-none"
              type="text"
              placeholder="Search Anime"
              ref={searchInputRef}
            ></input>
            <button
              className="absolute right-0 p-2 rounded-full bg-zinc-700"
              onClick={() => {
                onChangeInput(searchInputRef.current.value);
                onRecieveData("searching");
              }}
            >
              <IoSearch fontSize={"1.5rem"} />
            </button>
          </div>
        </li>
        <li className="flex flex-col lg:flex-1 items-end">
          <div className="flex flex-col items-end relative">
            <CiMenuFries
              className="cursor-pointer"
              fontSize={"1.5rem"}
              onClick={() => {
                menuDropdown === "closed"
                  ? setMenuDropdown("opened")
                  : setMenuDropdown("closed");
              }}
            ></CiMenuFries>
            {menuDropdown === "opened" ? (
              <ul className="absolute top-[2rem] right-[-0.5rem] z-[3] text-center bg-neutral-800 rounded-xl">
                <li
                  className="py-3 px-5 cursor-pointer"
                  onClick={() => {
                    setMenuDropdown("closed");
                    onRecieveData(null);
                  }}
                >
                  Home
                </li>
                <li className="py-3 px-5 cursor-pointer">Help</li>
                <li className="py-3 px-5 cursor-pointer">Contact</li>
              </ul>
            ) : null}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
