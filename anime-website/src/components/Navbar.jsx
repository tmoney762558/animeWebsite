import React from "react";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="p-3">
      <ul className="flex justify-between items-center">
        <li className="flex justify-start flex-1">
          <h2 className="text-2xl">AnimeHaven</h2>
        </li>
        <li className="flex justify-center flex-1">
          <div className="w-full">
            <input
              className="w-full py-2 pl-3 bg-zinc-700 rounded-full text-zinc-300"
              type="text"
              placeholder="Search Anime"
            ></input>
          </div>
        </li>
        <li className="flex justify-end flex-1">
          <CiMenuFries
            className="cursor-pointer"
            fontSize={"1.5rem"}
          ></CiMenuFries>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
