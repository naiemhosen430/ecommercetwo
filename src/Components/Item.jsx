import React from "react";

export default function Item({ image, itemname, price, sell, rating }) {
  return (
    <>
      <div className="rounded-xl inline-block m-4 p-2 lg:w-3/12 bg-slate-300 shadow hover:bg-slate-400">
        <img className="block w-full h-40" src={image} alt="" />
        <h1 className="text-2xl font-bold">{itemname}</h1>
        <div className="flex py-2">
          <h1 className="w-4/12">Price: {price}</h1>
          <h1 className="w-4/12">Total: {sell}</h1>
          <h1 className="w-4/12">Rating {rating}</h1>
        </div>
      </div>
    </>
  );
}
