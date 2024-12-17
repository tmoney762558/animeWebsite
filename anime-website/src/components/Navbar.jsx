import React from "react";
import { useState, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

// Navbar.jsx: Simple Navbar that holds a text input for searching as well as other site navigation

const Navbar = ({ onRecieveData, onChangeInput }) => {
  const searchInputRef = useRef();

  return (
    <nav className="p-3 bg-neutral-900 border-b-[2px] border-neutral-800">
      <ul className="flex justify-between items-center">
        <li className="lg:flex hidden lg:flex-1 justify-start">
          <h2 className="text-2xl font-titleFont">AnimeHaven</h2>
        </li>
        <li className="flex lg:flex-1 justify-center">
          <form className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
              onChangeInput(searchInputRef.current.value.replace(" ", ""));
              onRecieveData("searching");
            }}
          >
            <div className="flex items-center w-full relative">
              <input
                className="w-full py-2 pl-3 bg-zinc-800 rounded-full text-zinc-400 outline-none"
                type="text"
                placeholder="Search Anime"
                ref={searchInputRef}
              ></input>
              <button
                type="submit"
                className="absolute right-0 p-2 rounded-full bg-zinc-700"
              >
                <IoSearch fontSize={"1.5rem"} />
              </button>
            </div>
          </form>
        </li>
        <li className="flex flex-col lg:flex-1 items-end">
          <div className="flex flex-col items-end relative">
            <FaHome
              className="cursor-pointer"
              fontSize={"2rem"}
              fill="#a1a1aa"
              onClick={() => {
                onRecieveData(null);
              }}
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
