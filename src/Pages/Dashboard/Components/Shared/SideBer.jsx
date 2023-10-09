import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SideBer() {
  const [menuItems, setMenuItems] = useState([
    "profile",
    "edit-profile",
    "balance",
    "withdraw",
    "members",
  ]);
  return (
    <>
      <div className="h-screen w-2/12 bg-slate-900 inline-block p-4">
        <ul>
          <Link
            to={`/dashboard`}
            className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
          >
            Dashboard
          </Link>
          {menuItems.map((item) => (
            <Link
              to={`/dashboard/${item}`}
              key={item}
              className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
