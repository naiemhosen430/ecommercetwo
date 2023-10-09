import React from "react";
import { useParams } from "react-router-dom";

export default function Search() {
  const { text } = useParams();
  return (
    <>
      <div className="p-2">
        <div className="text-center text-3xl text-white bg-slate-900 p-10 px-5">
          <h1>You have searched for {text}</h1>
        </div>

        <div className="p-5">
          <h1 className="text-center text-lg">No font result!</h1>
        </div>
      </div>
    </>
  );
}
