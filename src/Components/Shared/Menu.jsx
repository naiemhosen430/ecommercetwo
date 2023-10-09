import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [menuBox, setMenuBox] = useState(false);

  // hundle onclick
  const toggleMenu = () => {
    if (menuBox === true) {
      setMenuBox(false);
    } else {
      setMenuBox(true);
    }
  };
  return (
    <>
      <div className="p-2 px-4 z-10 sticky flex top-0 bg-white shadow-xl">
        <div className="lg:w-3/12 w-9/12">
          <h1 className="font-bold text-2xl">
            <Link to={"/"}>Naiem E-Commerce</Link>
          </h1>
        </div>

        <div className="lg:w-4/12 hidden">
          <ul className="flex space-x-2">
            <Link
              to={"/cetagory"}
              className="font-bold p-2 px-4 hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Catagory
            </Link>
            <Link
              to={"/project"}
              className="font-bold p-2 px-4 hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Project
            </Link>
            <Link
              to={"/pricing"}
              className="font-bold p-2 px-4 hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Pricing
            </Link>
          </ul>
        </div>

        <div className="lg:w-4/12 hidden lg:flex items-center">
          <input
            className="py-2 px-4 rounded-3xl text-slate-950 border bg-slate-300"
            type="search"
            name=""
            id=""
            placeholder="Search your keyword"
          />
          <Link
            className="text-black bg-slate-400 rounded-2xl py-2 px-4"
            to={'/search/"something"'}
          >
            Search
          </Link>
        </div>

        <div className="lg:hidden w-3/12 text-right">
          <button
            onClick={toggleMenu}
            className="inline-block py-1 px-4 hover:bg-slate-600 bg-slate-800 text-white font-bold rounded-md"
          >
            Menu
          </button>
        </div>
      </div>

      {menuBox && (
        <div className="w-screen h-screen">
          <ul className="space-y-2 lg:space-x-2">
            <Link
              onClick={toggleMenu}
              to={"/cetagory"}
              className="font-bold p-2 px-4 block hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Catagory
            </Link>
            <Link
              onClick={toggleMenu}
              to={"/cetagory"}
              className="font-bold p-2 px-4 block hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Catagory
            </Link>
            <Link
              onClick={toggleMenu}
              to={"/project"}
              className="font-bold p-2 px-4 block hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Project
            </Link>
            <Link
              onClick={toggleMenu}
              to={"/pricing"}
              className="font-bold p-2 px-4 block hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Pricing
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}
