import React from "react";
import Swiper from "../../../Components/Swiper/Swiper";

export default function Hero() {
  return (
    <>
      <div className="h-screen bg-black lg:p-20 p-10 px-10">
        <div className="lg:flex">
          <div className="lg:w-4/12">
            <h1 className="text-white font-bold text-3xl py-5">
              Here's will be heading
            </h1>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              facilis tempore totam tenetur suscipit quasi a maiores corporis
              quae facere laudantium porro aperiam rerum est quibusdam hic,
              perspiciatis libero vero?
            </p>
          </div>
        </div>

        <Swiper item={2} />
      </div>
    </>
  );
}
