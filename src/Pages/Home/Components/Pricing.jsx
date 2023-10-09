import React from "react";
import Swiper from "../../../Components/Swiper/Swiper";

export default function Pricing() {
  return (
    <>
      <div className="lg:m-10 mx-5 rounded-xl lg:px-10 px-5 lg:flex lg:items-center bg-slate-900">
        <div className="lg:w-4/12 p-10 px-0">
          <h1 className="text-xl text-white font-bold">
            Make your price with a sweetable condition
          </h1>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            quae nihil dolorum eligendi impedit, perspiciatis laudantium, a
            officiis amet incidunt laboriosam earum accusamus veritatis eius
            praesentium ab mollitia distinctio cupiditate.
          </p>
        </div>

        <div className="lg:w-8/12 px-4">
          <Swiper item={2} />
        </div>
      </div>
    </>
  );
}
