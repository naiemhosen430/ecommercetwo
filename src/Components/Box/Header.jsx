import React from "react";

export default function Header({ pagename }) {
  return (
    <>
      <div className="p-20 px-10 text-center bg-slate-900">
        <h1 className="text-3xl font-bold text-white">
          Welcome to {pagename} page
        </h1>
      </div>
    </>
  );
}
