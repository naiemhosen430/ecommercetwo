import React, { useEffect } from "react";
import Header from "../../Components/Box/Header";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cetagory() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="">
        <Header pagename={"Cetagory"} />
        <div className="p-10 text-center">
          <div
            className="text-black font-bold text-3xl rounded-xl cursor-pointer inline-block bg-slate-500 m-5 p-10 text-center"
            data-aos="fade-top"
          >
            <h1 className="text-2xl">Food</h1>
          </div>
          <div
            className="text-black font-bold text-3xl rounded-xl cursor-pointer inline-block bg-slate-500 m-5 p-10 text-center"
            data-aos="fade-top"
          >
            <h1 className="text-2xl">Shoes</h1>
          </div>
          <div
            className="text-black font-bold text-3xl rounded-xl cursor-pointer inline-block bg-slate-500 m-5 p-10 text-center"
            data-aos="fade-top"
          >
            <h1 className="text-2xl">T-Shart</h1>
          </div>
          <div
            className="text-black font-bold text-3xl rounded-xl cursor-pointer inline-block bg-slate-500 m-5 p-10 text-center"
            data-aos="fade-top"
          >
            <h1 className="text-2xl">Accessorics</h1>
          </div>
          <div
            className="text-black font-bold text-3xl rounded-xl cursor-pointer inline-block bg-slate-500 m-5 p-10 text-center"
            data-aos="fade-top"
          >
            <h1 className="text-2xl">Hear item</h1>
          </div>
          <div
            className="text-black font-bold text-3xl rounded-xl cursor-pointer inline-block bg-slate-500 m-5 p-10 text-center"
            data-aos="fade-top"
          >
            <h1 className="text-2xl">Others</h1>
          </div>
        </div>
      </div>
    </>
  );
}
